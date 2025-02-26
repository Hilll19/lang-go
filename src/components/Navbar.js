"use client";

import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

const Navbar = () => {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter(); // Tambahkan router

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk handle login
  const handleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  // Fungsi untuk memproses tombol Mulai Sekarang di homepage
  const handleStartNow = () => {
    if (session) {
      router.push("/dashboard");
    } else {
      signIn("google", { callbackUrl: "/dashboard" });
    }
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/LangGo.png"
              alt="LangGo Logo"
              width={80}
              height={80}
              priority
            />

            <div className="ml-3">
              <div
                className={`font-semibold text-lg ${
                  scrolled ? "text-gray-900" : "text-black"
                }`}
              >
                LangGo
              </div>
              <div
                className={`text-sm ${
                  scrolled ? "text-gray-600" : "text-black"
                }`}
              >
                Belajar bahasa dan buka jendela dunia
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Language", "Opportunity", "Event & News", "FAQ"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className={`${
                    scrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-black hover:text-gray-200"
                  } transition-colors duration-200`}
                >
                  {item}
                </Link>
              )
            )}
            
            {session ? (
              <div className="flex items-center space-x-3">
                <Link
                  href="/dashboard"
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    scrolled
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  DASHBOARD
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    scrolled
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-white text-red-600 hover:bg-gray-100"
                  }`}
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-gray-100"
                }`}
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
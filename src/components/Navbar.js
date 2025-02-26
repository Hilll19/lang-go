"use client";

import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Image
              src="/LangGo.png"
              alt="LangGo Logo"
              width={60}
              height={60}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              priority
            />

            <div className="ml-2 sm:ml-3">
              <div
                className={`font-semibold text-base sm:text-lg ${
                  scrolled ? "text-gray-900" : "text-black"
                }`}
              >
                LangGo
              </div>
              <div
                className={`text-xs sm:text-sm ${
                  scrolled ? "text-gray-600" : "text-black"
                }`}
              >
                Belajar bahasa dan buka jendela dunia
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
                  } transition-colors duration-200 text-sm lg:text-base`}
                >
                  {item}
                </Link>
              )
            )}
            
            {session ? (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Link
                  href="/dashboard"
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-colors duration-200 ${
                    scrolled
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  DASHBOARD
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-colors duration-200 ${
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
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-colors duration-200 ${
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-gray-100"
                }`}
              >
                LOGIN
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pt-2 pb-4 px-4">
          <div className="flex flex-col space-y-3">
            {["Home", "Language", "Opportunity", "Event & News", "FAQ"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
            
            {session ? (
              <div className="flex flex-col space-y-2 pt-2">
                <Link
                  href="/dashboard"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  DASHBOARD
                </Link>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setMobileMenuOpen(false);
                  }}
                  className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-full"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  handleLogin();
                  setMobileMenuOpen(false);
                }}
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full mt-2"
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
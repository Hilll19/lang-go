import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {["Home", "Language", "Oppurtunity", "Event & News", "FAQ"].map(
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
            <button
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

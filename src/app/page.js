"use client";
import { useState } from "react";
import Image from "next/image";
import ChatPopUp from "@/components/ChatPopUp";
import Navbar from "@/components/Navbar";
import SubHero from '@/components/SubHero';
import VissMiss from "@/components/VissMiss";
import Gallery from "@/components/Gallery";
import Reviewer from "@/components/Reviewer";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Selamat Datang di Platform LangGo
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Belajar dengan cara interaktif dan dapatkan pengalaman terbaik
            bersama AI QnA.
          </p>

          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Mulai Sekarang
          </button>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mission Statement */}
          <VissMiss/>
          <SubHero/>
          <Gallery/>
          <Reviewer/>
          <FAQs/>
          <Footer/>
        </div>
      </div>
      <ChatPopUp />
    </div>
  );
}

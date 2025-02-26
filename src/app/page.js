"use client"; // Tambahkan ini agar bisa pakai useSession()
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Navbar from "@/components/Navbar";
import VissMiss from "@/components/VissMiss";
import SubHero from "@/components/SubHero";
import Gallery from "@/components/Gallery";
import Reviewer from "@/components/Reviewer";
import Footer from "@/components/Footer";
import ChatPopUp from "@/components/ChatPopUp";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const handleStartNow = () => {
    if (session) {
      router.push("/dashboard");
    } else {
      signIn("google", { callbackUrl: "/dashboard" });
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      
      {/* Hero Section - Fully Responsive */}
      <div className="relative min-h-[80vh] sm:min-h-screen w-full flex flex-col justify-center items-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        
        <div className="z-10 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 text-center max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Your Platform for Success
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-2">
            Learn, grow, and connect with our innovative platform designed to help you achieve your goals.
          </p>
          <button
            onClick={handleStartNow}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition duration-300 text-base sm:text-lg"
          >
            {session ? "Go to Dashboard" : "Sign In to Get Started"}
          </button>
        </div>
      </div>

      {/* Komponen-komponen lain yang harus responsive */}
      <VissMiss />
      <SubHero />
      <Gallery />
      <Reviewer />
      
      {/* Pastikan ChatPopUp responsive */}
      <ChatPopUp />
      
      <Footer />
    </div>
  );
}
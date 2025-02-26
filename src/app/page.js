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
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm">
        </div>
        <div className="z-10 flex flex-col items-center justify-center p-6 md:p-12 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Platform for Success
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn, grow, and connect with our innovative platform designed to help you achieve your goals.
          </p>
          <button
            onClick={handleStartNow}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
          >
            {session ? "Go to Dashboard" : "Sign In to Get Started"}
          </button>
        </div>
      </div>

      <VissMiss />
      <SubHero />
      <Gallery />
      <Reviewer />
      <ChatPopUp />
      <Footer />
    </div>
  );
}
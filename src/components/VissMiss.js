import React from "react";
import Image from "next/image";

const VissMiss = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16 h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative h-[400px]">
        <Image
          src="/mission-vission1.jpg"
          alt="Language learners and global explorers"
          fill
          className="rounded-3xl object-cover shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Vision */}
        <div>
          <h4 className="text-5xl font-bold text-gray-900 mb-4">Vision</h4>
          <p className="text-xl leading-relaxed text-gray-700">
            Empowering individuals to break language barriers and embrace global opportunities through an innovative, interactive platform that fosters language mastery and cultural exploration.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h4 className="text-5xl font-bold text-gray-900 mb-4">Mission</h4>
          <p className="text-xl leading-relaxed text-gray-700">
            Providing accessible language learning tools and curated international opportunities to help users confidently pursue education, careers, and experiences abroad, one step at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VissMiss;
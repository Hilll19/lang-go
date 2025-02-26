import React from "react";
import Image from "next/image";

const VissMiss = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 md:py-24 px-4 md:px-8 min-h-screen">
      {/* Image Section - Responsive sizing and margin adjustments */}
      <div className="w-full md:w-1/2 relative h-[250px] sm:h-[350px] md:h-[400px] mx-auto md:mx-0 max-w-md md:max-w-none mb-8 md:mb-0">
        <Image
          src="/vissmiss-img.jpg"
          alt="Language learners and global explorers"
          fill
          className="rounded-2xl md:rounded-3xl object-cover shadow-lg"
        />
      </div>

      {/* Text Section - Adjusted for mobile */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
        {/* Vision */}
        <div>
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Vision</h4>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            Empowering individuals to break language barriers and embrace global opportunities through an innovative, interactive platform that fosters language mastery and cultural exploration.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Mission</h4>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            Providing accessible language learning tools and curated international opportunities to help users confidently pursue education, careers, and experiences abroad, one step at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VissMiss;
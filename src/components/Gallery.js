import React from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="relative mb-32">
      {/* Background Decorations */}
      <div className="absolute w-[90%] h-24 rounded-3xl -bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
      <div className="absolute w-[95%] h-24 rounded-3xl -bottom-8 left-1/2 transform -translate-x-1/2 z-0"></div>

      {/* Main Content */}
      <div className="relative rounded-3xl p-8 z-20">
        <h4 className="text-5xl text-center font-bold text-gray-900 mb-8 mt-8">
          Gallery
        </h4>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="relative h-48">
            <Image
              src="/langgo-2.jpg"
              alt="Image An engaging digital classroom"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative md:col-span-2 md:row-span-2 h-48 md:h-96 group">
            <Image
              src="/langgo-1.jpg"
              alt="langgo"
              fill
              className="rounded-3xl object-cover"
            />
            {/* See More Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
                Lihat Lebih Banyak
                <FaEye className="text-blue-600 hover:text-white transition duration-300" />
              </button>
            </div>
          </div>
          <div className="relative h-48">
            <Image
              src="/langgo-3.jpg"
              alt="Students practicing language skills"
              fill
              className="rounded-3xl object-cover"
            />
          </div>

          {/* Row 2 */}
          <div className="relative h-48">
            <Image
              src="/langgo-4.jpg"
              alt="Students practicing language skills"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          {/* Middle column is spanned above */}
          <div className="relative h-48">
            <Image
              src="/langgo-8.jpg"
              alt="Students practicing language skills"
              fill
              className="rounded-3xl object-cover"
            />
          </div>

          {/* Row 3 */}
          <div className="relative h-48">
            <Image
              src="/langgo-6.jpg"
              alt="Students practicing language skills"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/langgo-7.jpg"
              alt="Students practicing language skills"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/langgo-5.jpg"
              alt="Students practicing language skills"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/langgo-9.jpg"
              alt="Students practicing language skills"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

"use client";
import Image from "next/image";

const Reviewer = () => {
  const reviews = [
    {
      id: 1,
      name: "Lisa Hartono",
      role: "Mahasiswa Universitas",
      text: "Belajar dengan LangGo sangat menyenangkan! AI QnA membantu saya berlatih berbicara bahasa Inggris dalam situasi nyata tanpa rasa takut.",
      avatar: "/lisa-avatar.jpg", 
      stars: 5,
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Karyawan Perusahaan Multinasional",
      text: "Fitur latihan percakapan interaktif di LangGo membantu saya meningkatkan kepercayaan diri dalam berkomunikasi dengan kolega internasional.",
      avatar: "/budi-avatar.jpg",
      stars: 5,
      bgColor: "bg-green-100"
    },
    {
      id: 3,
      name: "Siti Aisyah",
      role: "Ibu Rumah Tangga",
      text: "Sebagai ibu yang sibuk, saya bisa belajar kapan saja dengan materi yang fleksibel. AI LangGo benar-benar memudahkan saya memahami bahasa Inggris lebih cepat!",
      avatar: "/siti-avatar.jpg",
      stars: 4,
      bgColor: "bg-yellow-100"
    },
    {
      id: 4,
      name: "Ahmad Fauzi",
      role: "Pebisnis",
      text: "LangGo memberikan kurikulum yang bisa disesuaikan dengan kebutuhan bisnis saya. Saya bisa fokus belajar bahasa Inggris untuk presentasi dan negosiasi.",
      avatar: "/ahmad-avatar.jpg",
      stars: 5,
      bgColor: "bg-pink-100"
    },
    {
      id: 5,
      name: "Rina Prasetyo",
      role: "Pelajar SMA",
      text: "Latihan soal dan simulasi TOEFL di LangGo sangat membantu persiapan saya! Sekarang saya lebih percaya diri menghadapi ujian bahasa Inggris.",
      avatar: "/rina-avatar.jpg",
      stars: 5,
      bgColor: "bg-purple-100"
    },
    {
      id: 6,
      name: "Dedi Pratama",
      role: "Guru Bahasa Inggris",
      text: "Saya merekomendasikan LangGo kepada siswa saya karena fitur AI yang membuat latihan berbicara lebih menarik dan mendekati percakapan nyata.",
      avatar: "/dedi-avatar.jpg",
      stars: 5,
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lebih dari 2000+ Pelajar Menyukai LangGo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengan fitur interaktif dan AI QnA, belajar bahasa Inggris jadi lebih mudah dan menyenangkan bagi semua orang!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className={`${review.bgColor} rounded-2xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105`}
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 95% 100%, 0% 100%)"
              }}
            >
              <div className="border-t-2 border-dashed border-gray-300 absolute top-0 left-6 right-6"></div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm">
                  {review.text}
                </p>
              </div>
              
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-600">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-4 h-4 ${i < review.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviewer;

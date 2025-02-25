import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "Apa itu LangGo? 🤔",
      answer:
        "LangGo adalah platform yang menyediakan informasi lengkap buat kamu yang ingin belajar bahasa dan mencari peluang ke luar negeri, seperti beasiswa, program pertukaran, dan peluang kerja. Semua informasi tersedia secara gratis!",
    },
    {
      question: "Apakah LangGo menyediakan bimbingan pribadi? 📖",
      answer:
        "Tidak, LangGo tidak menyediakan bimbingan pribadi atau mentoring. Kami hanya mengumpulkan dan menyediakan informasi yang kamu butuhkan untuk belajar dan mencari kesempatan ke luar negeri.",
    },
    {
      question: "Bagaimana cara menggunakan LangGo? 🌍",
      answer:
        "Cukup eksplor konten yang tersedia di platform kami. Kamu bisa membaca artikel, panduan, dan kumpulan informasi terbaru tentang beasiswa, kursus gratis, dan tips penting lainnya.",
    },
    {
      question: "Apakah semua informasi di LangGo gratis? 🎉",
      answer:
        "Ya! Semua informasi yang kami sediakan di LangGo bisa diakses secara gratis. Kami ingin semua orang punya kesempatan yang sama untuk belajar dan berkembang tanpa hambatan biaya.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 md:px-8 w-full bg-opacity-90">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Tanya-Tanya LangGo 💡</h2>
          <p className="text-gray-600 mt-2">
            Semua informasi tentang LangGo yang perlu kamu tahu!
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-500 rounded-lg overflow-hidden ${
                openIndex === index ? "bg-gray-600" : "bg-gray-700"
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-200">
                  {faq.question}
                </span>
                <span className="text-blue-400 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-300 border-t border-gray-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

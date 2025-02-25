import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Jangan Biarkan Bahasa Jadi",
    highlight: "Penghalang",
    text: "Bahasa bukan batasan, tapi jembatan! Kesulitan memahami bahasa asing bisa menghambat peluangmu. Dengan metode interaktif LangGo, kamu bisa belajar lebih cepat dan percaya diri dalam berkomunikasi!",
    icon: "🌍",
  },
  {
    title: "Ubah Ketakutan Jadi",
    highlight: "Kepercayaan Diri",
    text: "Ragu berbicara? Latih percakapan nyata dengan kami! Banyak orang takut salah saat berbicara bahasa asing. LangGo membantumu berlatih dalam lingkungan yang nyaman, sehingga kamu bisa berbicara dengan lancar dan penuh percaya diri.",
    icon: "💡",
  },
  {
    title: "Bangun Koneksi, Raih",
    highlight: "Peluang",
    text: "Terhubung dengan dunia, buka jalan menuju sukses! Dengan LangGo, kamu bisa terhubung ke komunitas global, membuka peluang beasiswa, karier internasional, dan pengalaman budaya yang berharga.",
    icon: "🔗",
  },
  {
    title: "Belajar Tanpa Stres, dengan",
    highlight: "Metode Fun & Efektif",
    text: "Belajar yang menyenangkan, hasil maksimal! Metode kami dirancang agar pembelajaran terasa seperti permainan. Kamu bisa menikmati proses belajar tanpa merasa terbebani!",
    icon: "🎉",
  },
  {
    title: "Wujudkan Impianmu Tanpa",
    highlight: "Hambatan",
    text: "Akses global, sukses tanpa batas! Dengan latihan yang berkelanjutan dan akses ke berbagai sumber belajar internasional, kamu semakin dekat dengan impianmu!",
    icon: "🎯",
  },
  {
    title: "Berlatih Kapan Saja, Dimana Saja",
    highlight: "Tanpa Batasan Waktu",
    text: "Fleksibel sesuai ritme hidupmu! Tidak ada alasan sibuk! Dengan LangGo, kamu bisa belajar kapan saja dan di mana saja sesuai dengan jadwalmu.",
    icon: "⏳",
  },
];

const SubHero = () => {
  return (
    <div className="max-w-5xl mx-auto mb-48 p-6 h-screen flex flex-col justify-between">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Cara Mudah untuk{' '}
          <span className="relative inline-block text-blue-500">
            Belajar & Berkembang
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 origin-left"
            />
          </span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          LangGo hadir untuk membantu kamu menguasai bahasa asing dengan lebih mudah dan menyenangkan. Dapatkan akses ke berbagai sumber belajar dan kesempatan internasional untuk mencapai impianmu!
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-[30px] p-6 shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                {card.title} <span className="text-blue-400">{card.highlight}</span>
              </h2>
              <p className="text-gray-500">{card.text}</p>
            </div>
            <button className="absolute top-4 right-4 bg-blue-100 text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-200">
              <ArrowUpRight size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubHero;

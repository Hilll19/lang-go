// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    // <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-16 rounded-lg">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/LangGo.png"
                alt="LangGo Logo"
                width={80}
                height={80}
                priority
              />
              <span className="text-xl font-bold">LangGo</span>
            </div>
            <p className="text-sm text-gray-600 mt-4 pr-4">
              Membantu Anda belajar bahasa dengan cara interaktif bersama AI
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-base font-medium mb-4">Tentang Kami</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/cerita-kami" className="text-sm text-gray-600 hover:text-blue-600">
                  Cerita Kami
                </Link>
              </li>
              <li>
                <Link href="/tim" className="text-sm text-gray-600 hover:text-blue-600">
                  Tim LangGo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-medium mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/karir" className="text-sm text-gray-600 hover:text-blue-600">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-sm text-gray-600 hover:text-blue-600">
                  Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-medium mb-4">Sumber Daya</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tutorial" className="text-sm text-gray-600 hover:text-blue-600">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link href="/dokumentasi" className="text-sm text-gray-600 hover:text-blue-600">
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link href="/komunitas" className="text-sm text-gray-600 hover:text-blue-600">
                  Komunitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Subscription */}
          <div>
            <h3 className="text-base font-medium mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-gray-600">(021) 555-0123</li>
              <li className="text-sm text-gray-600">info@langgo.id</li>
              <li className="text-sm text-gray-600">
                Jl. Pendidikan No. 88, Jakarta Selatan, DKI Jakarta, 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Email Subscription - Centered */}
        <div className="w-full max-w-md mx-auto mb-6">
          <div className="flex">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm flex-grow"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 text-sm">
              Notifikasi
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2025 LangGo. Hak Cipta Dilindungi</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
              Syarat dan Ketentuan
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
              Kebijakan Privasi
            </Link>
          </div>

          <div className="flex space-x-6">
            {/* Social Media Icons */}
            <Link href="https://facebook.com" className="text-gray-500 hover:text-blue-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>
            <Link href="https://twitter.com" className="text-gray-500 hover:text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="https://discord.com" className="text-gray-500 hover:text-indigo-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
            <Link href="https://reddit.com" className="text-gray-500 hover:text-orange-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-3.44-12.26c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.88 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6.209 5.424a.997.997 0 01-1.414-1.414 5.858 5.858 0 018.346 0 .997.997 0 01-1.414 1.414 3.859 3.859 0 00-5.518 0z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" className="text-gray-500 hover:text-blue-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    // </section>
  );
};

export default Footer;
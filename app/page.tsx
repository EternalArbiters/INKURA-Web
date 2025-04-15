"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faPaintBrush,
  faHeart,
  faTrophy,
  faUsers,
  faShieldAlt,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("theme") === "dark";
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
    }
  };

  return (
    <main>
      {/* Header - Stylish & Responsive */}
      <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md transition-all duration-300 border-b border-transparent dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 mr-auto">
            <Image src="/logo-inkura.png" alt="Logo Inkura" width={40} height={40} />
            <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">INKURA</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-gray-700 dark:text-gray-200">
            <a href="#fitur" className="hover:text-primary transition duration-200">Fitur</a>
            <a href="#kenapa" className="hover:text-primary transition duration-200">Kenapa Inkura</a>
            <a href="#testimoni" className="hover:text-primary transition duration-200">Testimoni</a>
            <a href="#alur" className="hover:text-primary transition duration-200">Cara Kerja</a>
            <a href="#premium" className="hover:text-primary transition duration-200">Premium</a>
            <a href="#komunitas" className="hover:text-primary transition duration-200">Komunitas</a>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className={`w-14 h-8 rounded-full flex items-center px-1 transition duration-300 ease-in-out focus:outline-none shadow-inner ${isDarkMode ? "bg-gradient-to-r from-indigo-600 to-purple-600 justify-end" : "bg-gray-300 justify-start"
                }`}
            >
              <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                {isDarkMode ? "🌙" : "☀️"}
              </div>
            </button>

            <button className="text-sm px-4 py-2 border rounded-md text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Masuk</button>
            <button className="text-sm px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-md hover:brightness-110 transition">Daftar
            </button>

          </div>
        </div>
        {/* Animated Neon Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-pulse"></div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-950 overflow-hidden py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT - Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left md:pl-4">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Platform Kreatif <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Lokal & Legal
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            Di setiap goresan dan kalimat, tersimpan harapan tak terucap. Inkura ingin menjadi rumah bagi karya-karya yang hadir dengan hati sang penulis pada pembacanya. Dunia yang tak terhingga menanti untuk ditapaki, tidakkah angin ingin membuka lembaran ini?
            </p>

            <div className="flex justify-center md:justify-start flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
                Mulai Petualangan
              </button>
              <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-white">
                Pulang
              </button>
            </div>
          </div>

          {/* RIGHT - Hero Image with Neon Line */}
          <div className="flex-1 flex flex-col items-center relative">
            <div className="relative w-[450px] h-[450px] md:w-[400px] md:h-[400px]">
              <Image
                src="/images/Kucchan.png"
                alt="Maskot Inkura"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Neon Line */}
            <div className="w-3/4 h-[5px] mt-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] animate-pulse" />
          </div>

        </div>
      </section>

      {/* Fitur Unggulan */}
      <section id="fitur" className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Fitur Unggulan <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Inkura</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:ring-1 hover:ring-primary/30 transition">
              <FontAwesomeIcon icon={faBookOpen} className="text-primary text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Baca Komik & Light Novel</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Akses karya original dari kreator lokal dan nikmati cerita seru setiap hari.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:ring-1 hover:ring-primary/30 transition">
              <FontAwesomeIcon icon={faPaintBrush} className="text-primary text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Upload Fanart & Karya</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Bagikan karya visual kamu seperti ilustrasi, zine, dan komik ke komunitas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:ring-1 hover:ring-primary/30 transition">
              <FontAwesomeIcon icon={faHeart} className="text-primary text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Donasi ke Kreator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Dukung kreator dan translator favoritmu lewat sistem donasi & premium.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:ring-1 hover:ring-primary/30 transition">
              <FontAwesomeIcon icon={faTrophy} className="text-primary text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Event & Premium</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Ikuti lomba dan event komunitas, serta dapatkan akses eksklusif premium.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:ring-1 hover:ring-primary/30 transition">
              <FontAwesomeIcon icon={faUsers} className="text-primary text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Komunitas Aktif</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Diskusi seru, bikin grup, atau ngobrol bareng kreator & fans lainnya!
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Kenapa Harus Inkura */}
      <section id="kenapa" className="bg-white dark:bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Kenapa Harus <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Inkura</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-800">
              <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Legalitas & Lisensi Terjamin</h3>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-800">
              <FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Dukungan untuk Kreator Lokal</h3>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-800">
              <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Komunitas Aktif & Terbuka</h3>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-800">
              <FontAwesomeIcon icon={faInfinity} className="text-4xl text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Inklusif untuk Semua Jenis Karya</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">💬 Apa Kata Mereka?</h2>
          <div className="space-y-8">
            <Testimoni
              name="Ayu, Kreator Komik"
              quote="Inkura bikin aku semangat terus berkarya karena pembaca dan dukungannya nyata!"
              avatar="/avatars/ayu.png"
            />
            <Testimoni
              name="Dika, Pembaca"
              quote="Akhirnya ada platform legal yang keren untuk baca karya lokal. UI-nya juga nyaman!"
              avatar="/avatars/dika.png"
            />
          </div>
        </div>
      </section>

      {/* Alur Penggunaan */}
      <section id="alur" className="bg-white dark:bg-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">📌 Cara Kerja Inkura</h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <Step step="1" title="Daftar" />
            <Step step="2" title="Eksplorasi Karya" />
            <Step step="3" title="Baca / Donasi" />
            <Step step="4" title="Gabung Komunitas" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-3">Inkura</h4>
            <p>Platform kreatif legal & lokal.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Menu</h4>
            <ul>
              <li><a href="#fitur">Fitur</a></li>
              <li><a href="#kenapa">Kenapa Inkura</a></li>
              <li><a href="#testimoni">Testimoni</a></li>
              <li><a href="#alur">Cara Kerja</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Legal</h4>
            <ul>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
              <li><a href="#">Kontak & Bantuan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Sosial Media</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Komponen tambahan
function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div>
      <span className="text-3xl">{icon}</span>
      <h3 className="font-bold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}

function Value({ title }: { title: string }) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
      <h3 className="font-medium text-lg">{title}</h3>
    </div>
  );
}

function Testimoni({ name, quote, avatar }: { name: string; quote: string; avatar: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <p className="italic mb-4">“{quote}”</p>
      <div className="flex items-center space-x-3">
        <Image src={avatar} alt={name} width={32} height={32} className="rounded-full" />
        <span className="text-sm font-semibold">{name}</span>
      </div>
    </div>
  );
}

function Step({ step, title }: { step: string; title: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary mb-2">{step}</div>
      <div>{title}</div>
    </div>
  );
}

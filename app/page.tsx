"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faPaintBrush,
  faHeart,
  faTrophy,
  faUsers,
  faFilm,
  faShieldAlt,
  faInfinity,
  faUserPlus,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Menu, X } from "lucide-react";
import { FaArrowUp } from "react-icons/fa";

const features = [
  {
    icon: faBookOpen,
    title: "Baca Komik & Light Novel",
    description:
      "Akses karya original dari kreator lokal dan nikmati cerita seru setiap hari.",
    color: "#1D4ED8", // biru
  },
  {
    icon: faFilm,
    title: "Nonton Anime & Drama",
    description:
      "Streaming anime dan drama favorit secara legal dengan kualitas terbaik.",
    color: "#DC2626", // merah
  },
  {
    icon: faPaintBrush,
    title: "Upload Fanart & Karya",
    description:
      "Bagikan karya visual kamu seperti ilustrasi, zine, dan komik ke komunitas.",
    color: "#F59E0B", // oranye
  },
  {
    icon: faHeart,
    title: "Donasi ke Kreator",
    description:
      "Dukung kreator dan translator favoritmu lewat sistem donasi & premium.",
    color: "#EC4899", // pink
  },
  {
    icon: faTrophy,
    title: "Event & Premium",
    description:
      "Ikuti lomba dan event komunitas, serta dapatkan akses eksklusif premium.",
    color: "#10B981", // hijau toska
  },
  {
    icon: faUsers,
    title: "Komunitas Aktif",
    description:
      "Diskusi seru, bikin grup, atau ngobrol bareng kreator & fans lainnya!",
    color: "#6366F1", // ungu indigo
  },
];


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Tambahkan state untuk menu mobile

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-gray-700 dark:text-gray-200">
            <a href="#fitur" className="hover:text-primary transition duration-200">Fitur</a>
            <a href="#kenapa" className="hover:text-primary transition duration-200">Kenapa Inkura</a>
            <a href="#konten" className="hover:text-primary transition duration-200">Koleksi</a>
            <a href="#alur" className="hover:text-primary transition duration-200">Cara Kerja</a>
            <a href="#premium" className="hover:text-primary transition duration-200">Premium</a>
            <a href="#komunitas" className="hover:text-primary transition duration-200">Komunitas</a>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
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
            <button className="text-sm px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-md hover:brightness-110 transition">Daftar</button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 dark:text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"><br />
            <a href="#fitur" className="block hover:text-primary transition duration-200">Fitur</a>
            <a href="#kenapa" className="block hover:text-primary transition duration-200">Kenapa Inkura</a>
            <a href="#konten" className="block hover:text-primary transition duration-200">Konten</a>
            <a href="#alur" className="block hover:text-primary transition duration-200">Cara Kerja</a>
            <a href="#premium" className="block hover:text-primary transition duration-200">Premium</a>
            <a href="#komunitas" className="block hover:text-primary transition duration-200">Komunitas</a>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Theme"
                className={`w-14 h-8 rounded-full flex items-center px-1 transition duration-300 ease-in-out focus:outline-none shadow-inner ${isDarkMode ? "bg-gradient-to-r from-indigo-600 to-purple-600 justify-end" : "bg-gray-300 justify-start"
                  }`}
              >
                <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                  {isDarkMode ? "🌙" : "☀️"}
                </div>
              </button><br />
              <button className="w-full border px-4 py-2 rounded-md text-sm dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Masuk</button>
              <button className="w-full px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-md hover:brightness-110 transition">Daftar</button>
            </div>
          </div>
        )}

        {/* Animated Neon Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-pulse"></div>
      </header>

      {/* Tombol Scroll ke Atas */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>

      {/* Hero Section */}
      <motion.section
        className="relative bg-white dark:bg-gray-950 overflow-hidden py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-16">

          {/* LEFT - Text Content */}
          <motion.div
            className="flex-1 space-y-6 text-center md:text-left md:pl-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Platform Kreatif <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Lokal & Legal
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Di setiap goresan dan kalimat, tersimpan harapan tak terucap. Inkura ingin menjadi rumah bagi karya-karya yang hadir dengan hati sang penulis pada pembacanya. Dunia yang tak terhingga menanti untuk ditapaki, tidakkah angin ingin membuka lembaran ini?
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
                Mulai Petualangan
              </button>
              <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-white">
                Pulang
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT - Hero Image */}
          <motion.div
            className="flex-1 flex flex-col items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
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
          </motion.div>
        </div>
      </motion.section>

      {/* Fitur Unggulan */}
      <motion.section
        id="fitur"
        className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Fitur Unggulan{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Inkura
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:ring-1 hover:ring-primary/30 transition"
              >
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-4xl mb-4"
                  style={{ color: feature.color }}
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Kenapa Harus Inkura */}
      <motion.section
        id="kenapa"
        className="bg-white dark:bg-gray-950 py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Kenapa Harus{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Inkura
            </span>
            ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: faShieldAlt,
                color: "text-purple-500",
                title: "Legalitas & Lisensi Terjamin",
              },
              {
                icon: faPaintBrush,
                color: "text-pink-500",
                title: "Dukungan untuk Kreator Lokal",
              },
              {
                icon: faUsers,
                color: "text-blue-500",
                title: "Komunitas Aktif & Terbuka",
              },
              {
                icon: faInfinity,
                color: "text-indigo-500",
                title: "Inklusif untuk Semua Jenis Karya",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={item.icon} className={`text-4xl mb-4 ${item.color}`} />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Showcase Karya di Inkura */}
      <motion.section
        id="konten"
        className="bg-gray-50 dark:bg-gray-900 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Apa Saja Yang Bisa Kamu Temukan di{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Inkura
            </span>
            ?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                src: "/images/komik.jpg",
                title: "Komik",
                desc: "Nikmati komik dari kreator lokal maupun luar berbakat dengan genre beragam dan cerita unik.",
              },
              {
                src: "/images/ln.jpg",
                title: "Novel & Light Novel",
                desc: "Bacaan ringan dengan cerita mendalam. Jelajahi dunia fantasi, romansa, dan petualangan mendebarkan.",
              },
              {
                src: "/images/fanart.jpg",
                title: "Fanart & Ilustrasi",
                desc: "Lihat dan upload karya visual penuh warna dari komunitas kreatif Indonesia.",
              },
              {
                src: "/images/zine.jpeg",
                title: "Zine & Karya Kreatif",
                desc: "Eksplorasi zine, cerita pendek, dan konten kreatif penuh ekspresi!",
              },
              {
                src: "/images/anime.png",
                title: "Anime & Donghua",
                desc: "Streaming anime favorit dengan lisensi resmi dan kualitas terbaik.",
              },
              {
                src: "/images/drama.jpg",
                title: "Drama Asia",
                desc: "Tonton drama Korea, Jepang, dan lainnya yang membuat hari-harimu penuh warna.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Alur Penggunaan */}
      <motion.section
        id="alur"
        className="bg-white dark:bg-gray-950 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Cara Kerja <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Inkura</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[ // semua step didefinisikan dalam array untuk map
              {
                icon: faUserPlus,
                bg: "from-pink-500 to-purple-500",
                title: "Daftar",
                desc: "Buat akun gratis sebagai pembaca atau kreator untuk mulai eksplorasi."
              },
              {
                icon: faCompass,
                bg: "from-purple-500 to-indigo-500",
                title: "Eksplorasi Karya",
                desc: "Temukan komik, light novel, ilustrasi, anime, dan drama favoritmu."
              },
              {
                icon: faBookOpen,
                bg: "from-indigo-500 to-blue-500",
                title: "Baca / Donasi",
                desc: "Nikmati karya pilihan secara gratis atau dukung kreator lewat donasi."
              },
              {
                icon: faUsers,
                bg: "from-blue-500 to-cyan-500",
                title: "Gabung Komunitas",
                desc: "Diskusi, buat grup, ikuti event, dan berkembang bareng kreator lain."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-r ${item.bg} text-white rounded-full mb-4 text-2xl`}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-16 pb-8 px-6 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-sm">

          {/* Logo & Deskripsi */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-inkura.png" alt="Inkura Logo" className="w-8 h-8" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Inkura</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Platform ekosistem kreatif lokal non bajakan. Tempat bertemunya komik, light novel, fanart, anime, drama, dan komunitas.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#fitur" className="hover:text-primary transition">Fitur</a></li>
              <li><a href="#kenapa" className="hover:text-primary transition">Kenapa Inkura</a></li>
              <li><a href="#konten" className="hover:text-primary transition">Konten</a></li>
              <li><a href="#alur" className="hover:text-primary transition">Cara Kerja</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-primary transition">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-primary transition">Kontak & Bantuan</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="text-xl hover:text-pink-500 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-xl hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-xl hover:text-indigo-500 transition">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 dark:border-white/10 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Inkura. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// Komponen tambahan
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow hover:ring-1 hover:ring-primary/30 transition">
      <div className="text-4xl text-primary mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{desc}</p>
    </div>
  );
}

function Value({ title }: { title: string }) {
  return (
    <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-gray-800 dark:text-white text-base">{title}</h3>
    </div>
  );
}

function Showcase({
  title,
  cover,
  type,
}: {
  title: string;
  cover: string;
  type: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <Image src={cover} alt={title} width={400} height={300} className="w-full h-56 object-cover" />
      <div className="p-4">
        <span className="text-xs uppercase text-primary font-medium">{type}</span>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mt-1">{title}</h3>
      </div>
    </div>
  );
}

function Step({
  step,
  title,
  icon,
}: {
  step: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md">
      <div className="text-primary text-3xl mb-2">{icon}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Langkah {step}</div>
      <h4 className="font-semibold text-gray-800 dark:text-white">{title}</h4>
    </div>
  );
}


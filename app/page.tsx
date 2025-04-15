// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-950 py-6 px-6 lg:px-12 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <Image src="/logo-inkura.png" alt="Logo Inkura" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800 dark:text-white">INKURA</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#fitur" className="hover:text-primary transition">Fitur</a>
          <a href="#komunitas" className="hover:text-primary transition">Komunitas</a>
          <a href="#premium" className="hover:text-primary transition">Premium</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* LEFT - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Platform Kreatif <span className="text-primary">Legal & Lokal</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Baca dan dukung komik, novel, zine, dan karya dari kreator lokal — langsung dari sumbernya.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Daftar Sekarang →
              </button>
              <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Masuk
              </button>
            </div>
          </div>

          {/* RIGHT - Hero Illustration */}
          <div className="w-full h-64 md:h-80 rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Image
              src="/images/inkuraAI.png"
              alt="Ilustrasi Inkura"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section id="fitur" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">✨ Fitur Unggulan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <span className="text-3xl">📚</span>
              <h3 className="font-bold mt-2">Komik & Light Novel</h3>
              <p className="text-gray-500 text-sm">Original dan resmi dari kreator lokal.</p>
            </div>
            <div>
              <span className="text-3xl">🎨</span>
              <h3 className="font-bold mt-2">Fanart & Komunitas</h3>
              <p className="text-gray-500 text-sm">Upload karya dan diskusi bareng komunitas.</p>
            </div>
            <div>
              <span className="text-3xl">❤️</span>
              <h3 className="font-bold mt-2">Donasi Kreator</h3>
              <p className="text-gray-500 text-sm">Langsung dukung karya favoritmu.</p>
            </div>
            <div>
              <span className="text-3xl">🏆</span>
              <h3 className="font-bold mt-2">Event & Premium</h3>
              <p className="text-gray-500 text-sm">Akses konten eksklusif dan lomba berhadiah.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowUp, FaEdit, FaTrash, FaUpload } from "react-icons/fa";
import DashboardNavbar from "../components/DashboardNavbar";

interface Comic {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [comics, setComics] = useState<Comic[]>([]);
  const [newComic, setNewComic] = useState<Partial<Comic>>({});
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme);
  }, []);

  useEffect(() => {
    setComics([
      {
        id: 1,
        title: "Komik Fantasi",
        description: "Petualangan di dunia magis yang penuh warna.",
        image: "/images/sample-comic.jpg",
      },
      {
        id: 2,
        title: "Drama Kampus",
        description: "Kisah cinta dan persahabatan di antara semester.",
        image: "/images/sample-comic.jpg",
      },
      {
        id: 3,
        title: "Dunia Robot",
        description: "Fiksi ilmiah bertemu jiwa manusia.",
        image: "/images/sample-comic.jpg",
      },
    ]);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCreateOrUpdate = () => {
    if (!newComic.title || !newComic.description || !newComic.image) return;

    if (editingId) {
      setComics((prev) =>
        prev.map((comic) =>
          comic.id === editingId ? { ...comic, ...newComic, id: editingId } : comic
        )
      );
    } else {
      const newId = comics.length + 1;
      setComics([...comics, { ...(newComic as Comic), id: newId }]);
    }

    setNewComic({});
    setEditingId(null);
  };

  const handleEdit = (id: number) => {
    const comic = comics.find((c) => c.id === id);
    if (comic) {
      setNewComic(comic);
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    setComics((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-pink-50 dark:from-gray-950 dark:to-gray-900 pb-32">
      <DashboardNavbar />

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>

      <section className="pt-32 pb-12 px-4 text-center max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          Selamat datang kembali, kreator ✨
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
          Ini adalah ruang kendali pribadimu. Tambahkan karya, ubah deskripsi, atau hapus yang lama.
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-10 text-left">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            {editingId ? "Edit Karya" : "Upload Karya Baru"}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Judul"
              value={newComic.title || ""}
              onChange={(e) => setNewComic({ ...newComic, title: e.target.value })}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
            />
            <input
              type="text"
              placeholder="URL Gambar"
              value={newComic.image || ""}
              onChange={(e) => setNewComic({ ...newComic, image: e.target.value })}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
            />
          </div>
          <textarea
            placeholder="Deskripsi"
            value={newComic.description || ""}
            onChange={(e) => setNewComic({ ...newComic, description: e.target.value })}
            className="w-full mt-4 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <button
            onClick={handleCreateOrUpdate}
            className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md hover:brightness-110"
          >
            <FaUpload className="inline-block mr-2" /> {editingId ? "Update Karya" : "Upload Karya"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comics.map((comic) => (
            <div key={comic.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all relative">
              <Image
                src={comic.image}
                alt={comic.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">{comic.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{comic.description}</p>
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(comic.id)}
                  className="bg-yellow-400 text-white p-2 rounded-full shadow hover:scale-105"
                  title="Edit"
                >
                  <FaEdit size={14} />
                </button>
                <button
                  onClick={() => handleDelete(comic.id)}
                  className="bg-red-500 text-white p-2 rounded-full shadow hover:scale-105"
                  title="Delete"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
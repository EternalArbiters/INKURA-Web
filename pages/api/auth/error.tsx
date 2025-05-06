"use client";

import { useSearchParams } from "next/navigation";

const AuthErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  let message = "Terjadi kesalahan yang tidak diketahui.";

  switch (error) {
    case "CredentialsSignin":
      message = "Email atau password salah. Silakan coba lagi.";
      break;
    case "AccessDenied":
      message = "Akses ditolak. Anda tidak memiliki izin.";
      break;
    case "Configuration":
      message = "Konfigurasi otentikasi bermasalah.";
      break;
    case "Verification":
      message = "Verifikasi gagal atau link sudah kadaluarsa.";
      break;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Gagal Masuk</h1>
        <p>{message}</p>
        <a
          href="/auth/signin"
          className="mt-6 inline-block px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Kembali ke Halaman Masuk
        </a>
      </div>
    </div>
  );
};

export default AuthErrorPage;

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  displayName: string;
  userImage: string;
  toggleDarkMode: () => void;
  handleLogout: () => void;
  isDarkMode: boolean;
}

export default function MobileNav({
  isOpen,
  onClose,
  displayName,
  userImage,
  toggleDarkMode,
  handleLogout,
  isDarkMode,
}: MobileNavProps) {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  if (!isOpen) return null;

  const navItems = [
    ["Home", "/home"],
    ["All", "/all"],
    ["Novel", "/novel"],
    ["Comic", "/comic"],
    ["Film", "/film"],
    ["Upload", "/upload"],
    ["Community", "/community"],
    ["Account", "/settings/account"],
    ["History", "/settings/history"],
  ];

  const categoryItems = [
    ["Genres", "/genre"],
    ["Regions", "/region"],
    ["Translated", "/translated"],
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Overlay: full screen, only triggers on background tap */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-700/70 via-indigo-700/60 to-blue-700/50 backdrop-blur-xl" />
      </div>

      {/* Sidebar: No onClick here */}
      <aside
        className={`fixed top-0 right-0 z-50 w-1/2 max-w-sm h-full px-6 py-6 overflow-y-auto transition bg-white dark:bg-gray-900 shadow-xl`}
      >
        {/* User Info */}
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src={userImage}
            alt="User"
            width={36}
            height={36}
            className="rounded-full border border-gray-400"
          />
          <span className="text-sm font-medium text-gray-800 dark:text-white truncate">
            {displayName}
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`block px-4 py-2 rounded text-sm transition ${
                isActive(href)
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white text-gray-700 dark:text-white/80"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="mt-2">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full text-left px-4 py-2 rounded text-sm text-gray-700 dark:text-white/80 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white"
            >
              Categories
            </button>
            {showDropdown && (
              <div className="ml-4 mt-1 space-y-1">
                {categoryItems.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className={`block px-3 py-1 rounded text-sm transition ${
                      isActive(href)
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white text-gray-600 dark:text-white/70"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Dark Mode & Logout */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-white">Theme</span>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className={`w-14 h-8 rounded-full flex items-center px-1 transition shadow-inner ${
                isDarkMode
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 justify-end"
                  : "bg-gray-300 justify-start"
              }`}
            >
              <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                {isDarkMode ? "🌙" : "☀️"}
              </div>
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded text-red-500 hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

"use client";

import { useAuthModal } from "@/hooks/useAuthModal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { FaGoogle, FaDiscord } from "react-icons/fa";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function AuthModal() {
  const { isOpen, onClose, onOpen, type } = useAuthModal();
  const isLogin = type === "login";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-white dark:bg-gray-900 overflow-hidden rounded-2xl shadow-2xl">
        <VisuallyHidden>
          <DialogTitle>{isLogin ? "Login" : "Signup"}</DialogTitle>
        </VisuallyHidden>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] h-full">
          {/* Left Side: Illustration */}
          <motion.div
            className="relative hidden md:flex w-full h-full overflow-hidden rounded-l-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient overlay atas bawah */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-400 via-transparent to-yellow-400 z-10 pointer-events-none" />

            {/* Gambar full */}
            <img
              src="/images/login.png"
              alt="Login Art"
              className="w-full h-full object-cover"
            />
          </motion.div>


          {/* Right Side: Form */}
          <motion.div
            className="flex flex-col justify-center items-center p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
              {isLogin ? "Welcome Back!" : "Join Inkura"}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              {isLogin
                ? "Log in to access amazing content."
                : "Create your account to start your journey."}
            </p>

            <div className="w-full space-y-3 max-w-md">
              <button className="w-full flex items-center justify-center gap-2 whitespace-nowrap bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 whitespace-nowrap bg-[#5865F2] text-white px-5 py-2 rounded-lg shadow hover:bg-[#4752c4] transition">
                <FaDiscord />
                Continue with Discord
              </button>

              <div className="relative text-center py-4">
                <span className="absolute inset-x-0 top-1/2 border-t border-gray-300 dark:border-gray-600" />
                <span className="relative px-4 bg-white dark:bg-gray-900 text-gray-500 text-sm">
                  or continue with email
                </span>
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition">
                {isLogin ? "Log In" : "Sign Up"}
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}
              <button
                className="ml-1 text-primary hover:underline"
                onClick={() => onOpen(isLogin ? "signup" : "login")}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ChevronRight, Copy } from "lucide-react";
import Link from "next/link";
import { fullPageNavJs, fullPageNavTs } from "../navbar-code/fullPageNav";
import { Rochester } from "next/font/google";

const roch = Rochester({
  subsets: ["latin"],
  weight: "400",
});

interface NavItem {
  label: string;
  href: string;
  image: string;
}

const navItems: NavItem[] = [
  { label: "Link1", href: "", image: "/image1.jpg" },
  { label: "Link2", href: "", image: "/image2.jpg" },
  { label: "Link3", href: "", image: "/image3.jpg" },
  { label: "Link4", href: "", image: "/image4.jpg" },
];

const FullPageNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [tsCopied, setTsCopied] = useState(false);
  const [jsCopied, setJsCopied] = useState(false);
  const [showCopyButton, setShowCopyButton] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(fullPageNavTs);
      setTsCopied(true);
      setTimeout(() => setTsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };
  const handleCopyJsCode = async () => {
    try {
      await navigator.clipboard.writeText(fullPageNavJs);
      setJsCopied(true);
      setTimeout(() => setJsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      onMouseEnter={() => setShowCopyButton(true)}
      onMouseLeave={() => setShowCopyButton(false)}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="dark:bg-neutral-900 bg-gray-200 h-auto p-4 rounded-3xl z-40 relative"
    >
      <motion.div className="flex items-center justify-between mb-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="ml-3 text-2xl font-bold"
        >
          Full Page Nav
        </motion.h1>
        <AnimatePresence>
          {showCopyButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyCode}
                className="flex items-center cursor-pointer space-x-2 px-3  group text-white text-xs font-medium  transition-colors"
              >
                {tsCopied ? (
                  <div className="bg-green-500 flex items-center space-x-2 px-3 py-1  rounded-3xl">
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </div>
                ) : (
                  <div className="bg-blue-500 flex items-center space-x-2 px-3 py-1 rounded-3xl">
                    <Copy className="w-3 h-3" />
                    <span>Copy TS Code</span>
                  </div>
                )}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyJsCode}
                className="flex items-center cursor-pointer space-x-2 px-3 group text-white text-xs font-medium  transition-colors"
              >
                {jsCopied ? (
                  <div className="bg-green-500 flex items-center space-x-2 px-3 py-1 rounded-3xl">
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </div>
                ) : (
                  <div className="bg-yellow-500 flex items-center space-x-2 px-3  py-1 rounded-3xl">
                    <Copy className="w-3 h-3" />
                    <span>Copy JS Code</span>
                  </div>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.nav
        className="relative w-full transition-colors duration-300 dark:text-white text-black"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-12 ">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl md:text-4xl font-bold transition-colors duration-300 "
            >
              Name
            </Link>
          </div>

          <div className="hidden md:flex flex-col items-center text-sm">
            <span
              className={`${roch.className} font-medium transition-colors duration-300 dark:text-gray-300  text-gray-600`}
            >
              Location•
            </span>
            <span className=" text-xs transition-colors duration-300 dark:text-gray-300  text-gray-600 ">
              {getCurrentTime()}
            </span>
          </div>

          <motion.button
            className="relative w-8 h-6 md:w-10 md:h-8 flex flex-col justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
          >
            <motion.span
              className="w-full h-0.5 block transition-colors duration-300 dark:bg-white bg-black"
              animate={{ rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 block mt-2 transition-colors duration-300 dark:bg-white bg-black "
              animate={{ rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-60 w-full transition-colors duration-300 dark:bg-black bg-white"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="flex h-full">
              {/* Left side - Navigation Links */}
              <div className="flex-1 flex flex-col justify-center w-full">
                <motion.div
                  className="absolute top-5 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-full md:px-12 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div>
                    <Link href="/" className="text-4xl font-bold">
                      Name
                    </Link>
                  </div>
                  <div className=" flex  flex-col dark:text-gray-300  text-gray-600 text-sm transition-colors duration-300 ">
                    <div className={`${roch.className} font-medium`}>Name</div>
                    <div className="text-xs mt-1">
                      Location • {getCurrentTime()}
                    </div>
                  </div>
                  {/* Menu/Close Button */}
                  <motion.button
                    onClick={toggleMenu}
                    className="relative w-8 h-6 md:w-10 md:h-8 flex flex-col justify-center items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMenuOpen && (
                      // Close button (X)
                      <div onClick={toggleMenu}>
                        <motion.span
                          className="dark:bg-white bg-black w-full h-0.5 block absolute transition-colors duration-300"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 45 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.span
                          className="dark:bg-white bg-black w-full h-0.5 block absolute transition-colors duration-300 "
                          initial={{ rotate: 0 }}
                          animate={{ rotate: -45 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    )}
                  </motion.button>
                </motion.div>
                <div className="space-y-6 w-full">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1 + index * 0.1,
                        ease: "easeOut",
                      }}
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-center gap-8 text-3xl text-center md:text-4xl lg:text-5xl font-light dark:text-gray-500 dark:hover:text-white text-gray-400 hover:text-black duration-300 transition-all ease-in-out hover:translate-x-5"
                        onClick={toggleMenu}
                      >
                        {item.label}
                        <ChevronRight />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image Preview */}
              <div className="hidden lg:flex flex-1 items-center justify-center p-12">
                <div className="relative w-full h-96">
                  <AnimatePresence mode="wait">
                    {hoveredItem && (
                      <motion.div
                        key={hoveredItem}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`absolute inset-0 rounded-lg transition-all duration-300 `}
                        >
                          <Image
                            src={
                              navItems.find(
                                (item) => item.label === hoveredItem
                              )?.image || "/placeholder.jpg"
                            }
                            alt={hoveredItem}
                            fill
                            className="object-cover rounded-lg"
                            priority
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FullPageNav;

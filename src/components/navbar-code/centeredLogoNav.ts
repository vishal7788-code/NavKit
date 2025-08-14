export const centeredLogoNav = `
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy} from "lucide-react";
import Link from "next/link";

interface FlipButtonProps {
    children: React.ReactNode;
    hoverText: React.ReactNode;
  }

const CenteredLogoNav = () => {
  const [copied, setIsCopied] = useState(false);
  const [showCopyButton, setShowCopyButton] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ishover, setIshover] = useState(false)

  const leftLinks = [
    { label: "Link1", href: "#" },
    { label: "Link2", href: "#" },
    { label: "Link3", href: "#" },
    { label: "Link4", href: "#" },
  ];
  const rightLinks = [
    { label: "Link5", href: "#" },
    { label: "Link6", href: "#" },
  ];

   const FlipButton: React.FC<FlipButtonProps> = ({ children, hoverText }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.button
        className="relative overflow-hidden bg-black dark:bg-white text-white dark:text-black font-semibold px-12 py-2 rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        style={{ height: 40 }}
      >
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={false}
            animate={{ y: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
  
          {/* Hover text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={false}
            animate={{ y: isHovered ? "0%" : "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {hoverText}
          </motion.div>

      </motion.button>
    );
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="dark:bg-neutral-900 bg-gray-200 h-auto p-4 rounded-3xl"
    >
      
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-7xl py-3 px-5 backdrop-blur-lg bg-background supports-[backdrop-filter]:bg-background/60 shadow-md "
      >
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left links */}
          <div className="flex items-center space-x-8">
            {leftLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className="dark:text-gray-300 text-neutral-800 hover:text-black hover:dark:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 dark:bg-white bg-black transition-all duration-300 group-hover:w-full"></span>
              </motion.div>
            ))}
          </div>

          {/* Center logo */}
          <motion.div className="flex-shrink-0 text-2xl font-semibold ">
            <div>Your Logo Here</div>
          </motion.div>

          {/* Right links and button */}
          <div className="flex items-center space-x-8">
            {rightLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                <Link
                  href={link.href}
                  className="dark:text-gray-300 text-neutral-800 hover:text-black hover:dark:text-white transition-colors font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 dark:bg-white bg-black transition-all duration-300 group-hover:w-full"></span>

                </Link>
              </motion.div>
            ))}
            <FlipButton hoverText="Get Started">Get Started</FlipButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
           
            <motion.div className={\`flex-1 flex justify-center text-2xl font-semibold  \${mobileMenuOpen ? "hidden":"block"}\`}>
             <div>Your Logo Here</div>
            </motion.div>

            {/* Right side with menu button and gradient */}
            <div className="flex items-center w-full relative justify-end space-x-2">
              {/* Mobile menu button with two lines */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md dark:text-white text-black flex flex-col z-10  items-center  space-y-1"
              >
                <motion.div
                  animate={mobileMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-current"
                />
                <motion.div
                  animate={mobileMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-current"
                />
              </motion.button>
              <div className={\`\${mobileMenuOpen ? "block" : "hidden"} bg-gradient-to-r from-transparent via-orange-500 to-purple-500 h-full w-18 fixed inset-0 left-[83%] rounded-r-lg\`}></div>
            </div>
          </div>
        </div>

        {/* Mobile slide-in menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0   z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Slide-in menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className=" h-full w-80 max-w-[85vw]  z-50  lg:hidden "
              >
                <div className="p-2 h-full ">
                  {/* Mobile left links */}
                  <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                      {leftLinks.map((link, i) => (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                        >
                          <a
                            href={link.href}
                            className="block  dark:text-gray-300 text-4xl text-neutral-800 hover:text-black hover:dark:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile right links */}
                  <div className="space-y-6 ">
                    
                    <div className="space-y-2">
                      {rightLinks.map((link, i) => (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (leftLinks.length + i) * 0.1 + 0.2 }}
                        >
                          <a
                            href={link.href}
                            className="block text-xl dark:text-gray-300 text-neutral-800 hover:text-black hover:dark:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
};

export default CenteredLogoNav;

`
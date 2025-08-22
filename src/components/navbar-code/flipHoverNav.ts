export const flipHoverNav = `
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronRight, Check, Copy } from "lucide-react";
import { centeredLogoNav } from "../navbar-code/centeredLogoNav";

// ---------------- FlipLink Animation ----------------
const DURATION = 0.25;
const STAGGER = 0.025;

type HoverItem = {
  name: string;
  desc: string;
};

type HoverSection = {
  title: string;
  items: HoverItem[];
};

type HoverContent = {
  title: string;
  subtitle: string;
  sections: HoverSection[];
};
type NavLink = {
  id: number;
  name: string;
  hoverContent: HoverContent;
};
const FlipLink = ({ children }: { children: string }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
      style={{ lineHeight: 1 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

// ---------------- Navbar ----------------
const FlipHoverNav = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const links:NavLink[] = [
    {
      id: 1,
      name: "Link Name",
      hoverContent: {
        title: "NavKIT",
        subtitle: "Add your Subtitle",
        sections: [
          {
            title: "NavKIT",
            items: [
              { name: "Add your Name", desc: " Add your description" },
              {
                name: "Add your Name",
                desc: "Add your Description",
              },
            ],
          },
          {
            title: "Add your Title",
            items: [
              {
                name: "Add your Name",
                desc: "Add your description.",
              },
              { name: "Add your Name", desc: "Add your description." },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      name: "Link Name",
      hoverContent: {
        title: "Add your Title",
        subtitle: "Add your Subtitle",
        sections: [
          {
            title: "Add your Title",
            items: [
              { name: "Add your Name", desc: "Add your description." },
              { name: "Add your Name", desc: "Add your description." },
            ],
          },
          {
            title: "Add your Title",
            items: [
              { name: "Add your Name", desc: "Add your description." },
              { name: "Add your Name", desc: "Add your description." },
            ],
          },
        ],
      },
    },
    {
      id: 3,
      name: "Link Name",
      hoverContent: {
        title: "Add your Title",
        subtitle: "Add your Suubtitle",
        sections: [
          {
            title: "Add your Title",
            items: [
              { name: "Add your Name", desc: "Add your description." },
              { name: "Add your Name", desc: " Add your description." },
            ],
          },
          {
            title: "Partners",
            items: [
              { name: "Add your Name", desc: "Add your description." },
              { name: "Add your Name", desc: "Add your description." },
            ],
          },
        ],
      },
    },
  ];

  // ---------------- Hover Card ----------------
  const HoverCard = ({ content }: {content:HoverContent}) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-0 mt-4 w-[600px] bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 z-50"
      >
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{content.title}</h3>
          </div>
          <p className="text-gray-600">{content.subtitle}</p>
        </div>

        <div className="space-y-8">
          {content.sections.map((section: HoverSection, idx: number) => (
            <div key={idx}>
              <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {section.items.map((item: HovverItem, itemIdx: number) => (
                  <div key={itemIdx} className="group cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-gray-950 transition-colors">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 group-hover:text-gray-950 transition-colors">
                          {item.name}
                        </h5>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  // ---------------- Button with Flip Animation ----------------
  const HoverButton = ({
    children,
    icon = false,
  }: {
    children: string;
    icon?: boolean;
  }) => {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-3 py-2 group font-medium hidden bg-black rounded-full transition-all duration-200 overflow-hidden h-12 md:flex items-center gap-2 text-white"
      >
        {/* Flip animation for text */}
        <FlipLink>{children}</FlipLink>

        {icon && (
          <motion.div
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-2 text-black rounded-full"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        )}
      </motion.button>
    );
  };

  return (
    <motion.nav 
    className="dark:bg-neutral-900 bg-gray-200  rounded-3xl py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-4">
        <div className="flex justify-between p-4 bg-white items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            {/* place your logo image here */}
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">Name</span>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 relative">
              <div className="relative bg-gray-100/50 backdrop-blur-sm rounded-full p-1">
                {links.map((link) => (
                  <div
                    key={link.id}
                    className="relative inline-block"
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.a
                      href="#"
                      className="relative px-4 py-2 text-gray-700 font-medium transition-colors duration-200 block rounded-full z-10"
                      whileHover={{ y: -1 }}
                    >
                      {hoveredLink === link.id && (
                        <motion.div
                          layoutId="navHover"
                          className="absolute inset-0 bg-white rounded-full shadow-sm"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </motion.a>
                    <AnimatePresence>
                      {hoveredLink === link.id && (
                        <HoverCard content={link.hoverContent} />
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <HoverButton icon>Button 1</HoverButton>
            <HoverButton icon>Button 2</HoverButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="py-4 space-y-4">
                {links.map((link) => (
                  <motion.a
                    key={link.id}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: link.id * 0.1 }}
                    className="flex justify-between px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium"
                  >
                    {link.name}
                    <ChevronRight />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default FlipHoverNav;

`
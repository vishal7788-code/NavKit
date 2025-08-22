"use client";

import { useState, useEffect } from "react";
import { Check, Copy, Code, Zap, Palette, Smartphone } from "lucide-react";
import { useTheme } from "next-themes";

const installCommand = {
  npm: "npm install framer-motion lucide-react next-themes",
  pnpm: "pnpm add framer-motion lucide-react next-themes",
  yarn: "yarn add framer-motion lucide-react next-themes",
  bun: "bun add framer-motion lucide-react next-themes"
};

const packageManagers = [
  { name: "npm", color: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800" },
  { name: "pnpm", color: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800" },
  { name: "yarn", color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800" },
  { name: "bun", color: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/50 dark:text-yellow-300 dark:border-yellow-800" }
];

function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : 'dark';

  const copy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className={`flex items-center gap-1.5 px-2 py-1.5 cursor-pointer rounded-md text-xs font-medium border transition-all duration-200 backdrop-blur-sm ${
        currentTheme === 'light'
          ? 'border-gray-300 text-gray-700 hover:text-gray-900 bg-white/50 hover:bg-gray-50'
          : 'border-gray-600 text-gray-200 hover:text-white bg-black/50 hover:bg-gray-800/50'
      }`}
      aria-label="Copy command"
      type="button"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
        </>
      )}
    </button>
  );
}

function PackageInstall() {
  const [activeManager, setActiveManager] = useState("npm");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : 'dark';

  return (
    <div className={`group border rounded-xl backdrop-blur-sm hover:border-opacity-70 transition-all duration-300 overflow-hidden ${
      currentTheme === 'light'
        ? 'border-gray-300/50 bg-white/80 hover:border-gray-400/50'
        : 'border-gray-700/50 bg-black hover:border-gray-600/50'
    }`}>
      <div className="p-6">
        <div className="mb-6">
          <h3 className={`text-lg font-semibold mb-3 ${
            currentTheme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>Install Dependencies</h3>
        </div>

        <div className={`flex gap-1 mb-4 p-1 rounded-lg ${
          currentTheme === 'light' ? 'bg-gray-100/50' : 'bg-gray-900/50'
        }`}>
          {packageManagers.map((manager) => (
            <button
              key={manager.name}
              onClick={() => setActiveManager(manager.name)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                activeManager === manager.name
                  ? 'bg-blue-600 text-white shadow-sm'
                  : currentTheme === 'light'
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-600/50'
              }`}
              type="button"
            >
              {manager.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className={`rounded-lg p-4 font-mono text-sm border ${
            currentTheme === 'light'
              ? 'bg-gray-50 text-gray-900 border-gray-200'
              : 'bg-black text-gray-100 border-gray-800'
          }`}>
            <div className="flex items-center justify-between">
              <span className={currentTheme === 'light' ? 'text-gray-600' : 'text-gray-500'}>$</span>
              <code className="flex-1 ml-2">{installCommand[activeManager as keyof typeof installCommand]}</code>
              <div className="ml-3">
                <CopyButton textToCopy={installCommand[activeManager as keyof typeof installCommand]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DocsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : 'dark';

  const themeProviderCode = `"use client"

  import * as React from "react"
  import { Moon, Sun } from "lucide-react"
  import { useTheme } from "next-themes"
  
  import { Button } from "@/components/ui/button"
  
  export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
  
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }`;

  const rootLayoutCode = `import { ThemeProvider } from "next-themes";


export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      currentTheme === 'light' ? 'bg-white' : 'bg-black'
    }`}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${
            currentTheme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            NavKit
          </h1>
          <p className={`text-xl mb-8 leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${
            currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            More than just ready-made navbars — a toolkit for crafting sleek, animated navigation with ease.
          </p>
          
          <div className={`backdrop-blur-sm rounded-2xl p-8 border shadow-2xl max-w-3xl mx-auto transition-all duration-300 ${
            currentTheme === 'light'
              ? 'bg-white/80 border-gray-200/50 shadow-gray-200/50'
              : 'bg-black border-gray-700/50 shadow-black/50'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Copy & Paste Ready</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>Clean, readable components you can copy directly into your project</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Smooth Animations</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>Built with Framer Motion for fluid, professional interactions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Palette className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Easy Customization</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>Tailwind CSS makes styling changes simple and intuitive</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Smartphone className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Mobile First</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>Responsive design that works perfectly on all screen sizes</p>
                </div>
              </div>
            </div>
                <div className="text-sm italic text-center mt-5 text-gray-600">*Some animations may not appear in preview mode but work as expected during development.*</div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>How NavKit Works</h2>
            <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              NavKit provides pre-built navigation components that you can copy into your project and customize as needed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className={`backdrop-blur-sm rounded-xl p-6 border text-center transition-all duration-300 ${
              currentTheme === 'light'
                ? 'bg-white/80 border-gray-200/50'
                : 'bg-black border-gray-700/50'
            }`}>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Browse Components</h3>
              <p className={`text-sm transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>Choose from various navbar styles and designs</p>
            </div>
            <div className={`backdrop-blur-sm rounded-xl p-6 border text-center transition-all duration-300 ${
              currentTheme === 'light'
                ? 'bg-white/80 border-gray-200/50'
                : 'bg-black border-gray-700/50'
            }`}>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Copy Code</h3>
              <p className={`text-sm transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>Copy the component code directly to your clipboard</p>
            </div>
            <div className={`backdrop-blur-sm rounded-xl p-6 border text-center transition-all duration-300 ${
              currentTheme === 'light'
                ? 'bg-white/80 border-gray-200/50'
                : 'bg-black border-gray-700/50'
            }`}>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Customize</h3>
              <p className={`text-sm transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>Modify colors, spacing, and behavior to match your design</p>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>Quick Start</h2>
            <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Install the required dependencies to start using NavKit components in your project.
            </p>
          </div>
          
          <div className="space-y-6">
            <PackageInstall />
          </div>
        </section>

        {/* Theme Setup Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>Theme Configuration</h2>
            <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Set up dark mode support with automatic system preference detection.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className={`backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${
              currentTheme === 'light'
                ? 'bg-white/80 border-gray-200/50'
                : 'bg-black border-gray-700/50'
            }`}>
              <div className={`px-6 py-4 border-b transition-all duration-300 ${
                currentTheme === 'light'
                  ? 'bg-gray-50/50 border-gray-300/50'
                  : 'bg-black border-gray-600/50'
              }`}>
                <h3 className={`font-semibold flex items-center gap-2 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  Create Theme Toggle Component
                </h3>
                <p className={`text-sm mt-1 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>components/theme-toggle.tsx</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className={`rounded-xl p-6 font-mono text-sm border overflow-x-auto transition-all duration-300 ${
                    currentTheme === 'light'
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-black border-gray-800'
                  }`}>
                    <pre className={`whitespace-pre-wrap transition-colors duration-300 ${
                      currentTheme === 'light' ? 'text-gray-800' : 'text-gray-300'
                    }`}>{themeProviderCode}</pre>
                    <div className="absolute top-4 right-4">
                      <CopyButton textToCopy={themeProviderCode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${
              currentTheme === 'light'
                ? 'bg-white/80 border-gray-200/50'
                : 'bg-black border-gray-700/50'
            }`}>
              <div className={`px-6 py-4 border-b transition-all duration-300 ${
                currentTheme === 'light'
                  ? 'bg-gray-50/50 border-gray-300/50'
                  : 'bg-black border-gray-600/50'
              }`}>
                <h3 className={`font-semibold flex items-center gap-2 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  Update Root Layout
                </h3>
                <p className={`text-sm mt-1 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>app/layout.tsx</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className={`rounded-xl p-6 font-mono text-sm border overflow-x-auto transition-all duration-300 ${
                    currentTheme === 'light'
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-black border-gray-800'
                  }`}>
                    <pre className={`whitespace-pre-wrap transition-colors duration-300 ${
                      currentTheme === 'light' ? 'text-gray-800' : 'text-gray-300'
                    }`}>{rootLayoutCode}</pre>
                    <div className="absolute top-4 right-4">
                      <CopyButton textToCopy={rootLayoutCode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Completion note */}
            <div className="text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium backdrop-blur-sm transition-all duration-300 ${
                currentTheme === 'light'
                  ? 'bg-green-50/50 text-green-700 border-green-200/50'
                  : 'bg-green-900/50 text-green-300 border-green-700/50'
              }`}>
                <Check className="w-4 h-4" />
                Ready to go! Your components now support theme switching.
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>What You Get</h2>
            <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
              currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              NavKit provides everything you need to create professional navigation experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
              currentTheme === 'light'
                ? 'bg-gray-50/30 border-gray-200/50'
                : 'bg-gray-900/30 border-gray-700/50'
            }`}>
              <h3 className={`font-semibold mb-4 transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Component Features</h3>
              <ul className={`space-y-2 text-sm transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Mobile hamburger menus with smooth animations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Dark/light mode toggle functionality
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Active link highlighting and hover effects
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Dropdown menus and mega menus
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Search bars and user avatars
                </li>
              </ul>
            </div>

            <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
              currentTheme === 'light'
                ? 'bg-gray-50/30 border-gray-200/50'
                : 'bg-gray-900/30 border-gray-700/50'
            }`}>
              <h3 className={`font-semibold mb-4 transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Technical Benefits</h3>
              <ul className={`space-y-2 text-sm transition-colors duration-300 ${
                currentTheme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  TypeScript support for better development
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  Optimized bundle size with tree shaking
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  Accessible components with proper ARIA labels
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  SEO-friendly semantic HTML structure
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  Cross-browser compatibility
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Check, Copy, Code, Zap, Palette, Smartphone } from "lucide-react";

const installCommand = {
  npm: "npm install framer-motion lucide-react next-themes",
  pnpm: "pnpm add framer-motion lucide-react next-themes",
  yarn: "yarn add framer-motion lucide-react next-themes",
  bun: "bun add framer-motion lucide-react next-themes"
};

const packageManagers = [
  { name: "npm", color: "bg-red-50 text-red-700 border-red-200" },
  { name: "pnpm", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { name: "yarn", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "bun", color: "bg-yellow-50 text-yellow-700 border-yellow-200" }
];

function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-2 py-1.5 cursor-pointer rounded-md text-xs font-medium  border border-gray-600 text-gray-200 hover:text-white transition-all duration-200 backdrop-blur-sm"
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

  return (
    <div className="group border border-gray-700/50 rounded-xl bg-black backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Install Dependencies</h3>
        </div>

        <div className="flex gap-1 mb-4 p-1 bg-gray-900/50 rounded-lg">
          {packageManagers.map((manager) => (
            <button
              key={manager.name}
              onClick={() => setActiveManager(manager.name)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                activeManager === manager.name
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-600/50"
              }`}
              type="button"
            >
              {manager.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-100 border border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">$</span>
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
  const themeProviderCode = `import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`;

  const rootLayoutCode = `import { ThemeProvider } from "@/components/theme-provider"

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
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            NavKit
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          More than just ready-made navbars — a toolkit for crafting sleek, animated navigation with ease.  </p>
          
          <div className="bg-black backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Copy & Paste Ready</h3>
                  <p className="text-sm text-gray-300">Clean, readable components you can copy directly into your project</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Smooth Animations</h3>
                  <p className="text-sm text-gray-300">Built with Framer Motion for fluid, professional interactions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Palette className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Easy Customization</h3>
                  <p className="text-sm text-gray-300">Tailwind CSS makes styling changes simple and intuitive</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Smartphone className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Mobile First</h3>
                  <p className="text-sm text-gray-300">Responsive design that works perfectly on all screen sizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">How NavKit Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              NavKit provides pre-built navigation components that you can copy into your project and customize as needed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Browse Components</h3>
              <p className="text-sm text-gray-300">Choose from various navbar styles and designs</p>
            </div>
            <div className="bg-black backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Copy Code</h3>
              <p className="text-sm text-gray-300">Copy the component code directly to your clipboard</p>
            </div>
            <div className="bg-black backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Customize</h3>
              <p className="text-sm text-gray-300">Modify colors, spacing, and behavior to match your design</p>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Start</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
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
            <h2 className="text-3xl font-bold text-white mb-4">Theme Configuration</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Set up dark mode support with automatic system preference detection.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-black backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="px-6 py-4 bg-black border-b border-gray-600/50">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  Create Theme Provider Component
                </h3>
                <p className="text-sm text-gray-400 mt-1">components/theme-provider.tsx</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="bg-black rounded-xl p-6 font-mono text-sm border border-gray-800 overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre-wrap">{themeProviderCode}</pre>
                    <div className="absolute top-4 right-4">
                      <CopyButton textToCopy={themeProviderCode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-black backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="px-6 py-4 bg-black border-b border-gray-600/50">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  Update Root Layout
                </h3>
                <p className="text-sm text-gray-400 mt-1">app/layout.tsx</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="bg-black rounded-xl p-6 font-mono text-sm border border-gray-800 overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre-wrap">{rootLayoutCode}</pre>
                    <div className="absolute top-4 right-4">
                      <CopyButton textToCopy={rootLayoutCode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Completion note */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/50 text-green-300 rounded-full border border-green-700/50 text-sm font-medium backdrop-blur-sm">
                <Check className="w-4 h-4" />
                Ready to go! Your components now support theme switching.
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              NavKit provides everything you need to create professional navigation experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="font-semibold text-white mb-4">Component Features</h3>
              <ul className="space-y-2 text-sm text-gray-300">
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

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="font-semibold text-white mb-4">Technical Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-300">
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
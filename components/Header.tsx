"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Send, FileText } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  // { label: "AI Projects", href: "#ai-projects", highlight: true },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/25">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-bold text-lg text-white group-hover:bg-transparent transition-colors">
                <span className="bg-gradient-to-r from-indigo-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent group-hover:text-white">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Abiya S
              </span>
              <span className="text-[11px] font-medium text-zinc-400">
                Senior Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/50"
                    : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                // className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${isActive
                //   ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/50"
                //   : item.highlight
                //     ? "text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10"
                //     : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                //   }`}
                >
                  {/* {item.highlight && <Sparkles className="w-3 h-3 text-cyan-400" />} */}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#resume"
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 px-4 py-2 rounded-lg shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let&apos;s Talk</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                    ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/30"
                    : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {/* {item.highlight && <Sparkles className="w-4 h-4 text-cyan-400" />} */}
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-200 py-2.5 rounded-xl border border-white/10 hover:bg-white/[0.04]"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              View Resume
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-md shadow-indigo-500/25"
            >
              <Send className="w-4 h-4" />
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

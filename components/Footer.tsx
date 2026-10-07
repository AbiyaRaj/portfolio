"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070b] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center font-bold text-sm text-white">
                A
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">
                Abiya
              </span>
              <span className="text-[11px] text-zinc-400">
                Senior Software Developer • Resbee Info Tech
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300">
            <Link href="#hero" className="hover:text-white transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-white transition">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link href="#ai-projects" className="hover:text-cyan-400 transition">
              Research &amp; AI
            </Link>
            <Link href="#resume" className="hover:text-white transition">
              Resume
            </Link>
            <Link href="#contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Abiya, Senior Software Developer. Built with Next.js 16, React 19 &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4 text-zinc-300">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:abiyaraj7@gmail.com"
              className="hover:text-cyan-400 transition"
              aria-label="Email Abiya S"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

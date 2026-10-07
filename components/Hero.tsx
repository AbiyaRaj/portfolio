"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Mail,
  Terminal,
  Code2,
  Users,
  Award,
  Phone,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 left-10 w-[280px] h-[280px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Full Stack Developer • Resbee Info Tech (May 2022 – Present)</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Senior Software Developer &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Specialist
              </span>
            </h1>

            {/* Subtitle based on Profile Summary and Experience */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-4">
              Hello, I&apos;m <span className="font-semibold text-white">Abiya</span>.
              Full Stack Developer leading frontend engineering teams, architecting
              SaaS LMS platforms, School &amp; College management systems, and high-performance
              web applications using <span className="text-cyan-300 font-medium">Next.js</span>,{" "}
              <span className="text-indigo-300 font-medium">React.js</span>, and{" "}
              <span className="text-purple-300 font-medium">PHP (CodeIgniter)</span>.
            </p>

            <div className="flex items-center gap-4 text-xs text-zinc-400 mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Nagercoil, Tamil Nadu, India
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                M.Sc Computer Science (91%)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#experience"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Work Experience</span>
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Direct Connect Links */}
            <div className="flex flex-wrap items-center gap-4 text-zinc-400">
              <span className="text-xs uppercase tracking-widest font-semibold text-zinc-400">
                Contact
              </span>
              <div className="h-4 w-px bg-zinc-800" />
              <a
                href="mailto:abiyaraj7@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-zinc-300 hover:text-cyan-400 transition-all"
                aria-label="Email Abiya"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>abiyaraj7@gmail.com</span>
              </a>
              <a
                href="tel:+919488521731"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-zinc-300 hover:text-emerald-400 transition-all"
                aria-label="Call Abiya"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 9488521731</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-indigo-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Card / Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0b101d] border border-white/10 shadow-2xl overflow-hidden p-6">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    abiya_profile.ts
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                  Resbee Info Tech
                </span>
              </div>

              {/* Terminal Code Content */}
              <div className="font-mono text-xs sm:text-sm text-zinc-300 space-y-2 leading-relaxed">
                <p className="text-zinc-400">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-indigo-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">name</span>:{" "}
                  <span className="text-emerald-300">&quot;Abiya S&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">designation</span>:{" "}
                  <span className="text-emerald-300">&quot;Senior Software Developer&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">company</span>:{" "}
                  <span className="text-emerald-300">&quot;Resbee Info Tech&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">leadership</span>:{" "}
                  <span className="text-emerald-300">&quot;Leading Frontend Team (4 members)&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">keyStack</span>: [
                  <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;React.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;PHP CodeIgniter&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;MySQL&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;MongoDB&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;MySQL&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">Development</span>: [
                  <span className="text-emerald-300">&quot;Git Version Contro&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;CI/CD Pipelines&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Docker&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;AWS Deployment&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">currentlyLearning</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Python&quot;,
                    &quot;FastAPI&quot;,
                    &quot;LLMs&quot;,
                    &quot;RAG&quot;,
                    &quot;AI Agent&quot;
                  </span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">Focus</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;AI Forward Deployment Engineer&quot;
                  </span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">location</span>:{" "}
                  <span className="text-amber-300">&quot;Nagercoil, Tamil Nadu, India&quot;</span>
                </p>
                <p className="text-zinc-400">&#125;;</p>

                <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-400 flex items-center justify-between">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    May 2022 – Present Active
                  </span>
                  <span className="font-mono text-zinc-400">M.Sc CS: 91%</span>
                </div>
              </div>

              {/* Bottom Micro Stat Widgets based on resume */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-lg sm:text-xl font-bold text-white flex items-center justify-center gap-1">
                    <Users className="w-4 h-4 text-indigo-400" />
                    4
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Team Led</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-lg sm:text-xl font-bold text-white flex items-center justify-center gap-1">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    5+
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">SaaS Systems</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-lg sm:text-xl font-bold text-white flex items-center justify-center gap-1">
                    <Award className="w-4 h-4 text-purple-400" />
                    91%
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">M.Sc Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

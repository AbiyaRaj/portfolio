"use client";

import {
  Code,
  Users,
  ShieldCheck,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Languages,
  BookOpen,
} from "lucide-react";

export default function AboutMe() {
  const HIGHLIGHTS = [
    {
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      title: "Technical Team Leadership",
      description:
        "Leading a frontend engineering squad of 5+ developers at Resbee Info Tech, orchestrating sprint task allocation, conducting code reviews, and ensuring timely project milestones.",
    },
    {
      icon: Code,
      color: "from-purple-500 to-pink-500",
      title: "Full-Stack SaaS Architecture",
      description:
        "Developing scalable SaaS-based Learning Management Systems (LMS) and institutional management portals using Next.js, React.js, and PHP CodeIgniter.",
    },
    {
      icon: ShieldCheck,
      color: "from-cyan-500 to-teal-500",
      title: "API & Payment Integration",
      description:
        "Skilled in third-party REST API integrations, Postman testing, and secure Payment Gateway API flows for seamless frontend to backend communication.",
    },
    {
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      title: "Research & Image Processing",
      description:
        "Published author in IJRAEM for research on 'Catastrophe Prevention in Highly Industrialized Areas Using Image Processing'.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 • About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Dedicated Full Stack Developer &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Team Leader
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
            Exhibiting skills with utmost sincerity and dedicated smart work to build
            robust, scalable digital products and educational SaaS ecosystems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio / Story Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md relative">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Professional Profile</span>
                <span className="text-cyan-400 text-sm font-normal">💼</span>
              </h3>

              {/* Profile Summary Quote */}
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm italic text-indigo-200 mb-6">
                &ldquo;To work in challenging atmosphere by exhibiting my skills with
                utmost sincerity and dedicated smart work for the growth of your
                esteemed organization along with mine.&rdquo;
              </div>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white">Senior Software Developer</strong> and{" "}
                  <strong className="text-white">Full Stack Developer</strong> currently working at{" "}
                  <strong className="text-cyan-300">Resbee Info Tech</strong> since May 2022. I lead
                  a team of 4 frontend engineers, steering code reviews, task execution,
                  and technical delivery.
                </p>
                <p>
                  My core expertise spans modern JavaScript frameworks (Next.js, React.js)
                  and backend development with PHP CodeIgniter (v3 &amp; v4), Node.js, and
                  relational databases like MySQL. I have delivered major SaaS solutions
                  including Learning Management Systems (LMS), Ethiopian School &amp; College
                  Management systems, Digital Libraries, and HR administration suites.
                </p>
                <p>
                  With an M.Sc in Computer Science (91% Distinction) and an academic journal
                  publication in Image Processing, I bring disciplined engineering practices,
                  thorough API testing, and smooth frontend-to-backend workflows to every project.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Location</span>
                    <span className="font-semibold text-white">Nagercoil, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Education</span>
                    <span className="font-semibold text-white">M.Sc CS (91%)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Company</span>
                    <span className="font-semibold text-white">Resbee Info Tech</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Languages</span>
                    <span className="font-semibold text-white">English, Tamil, Malayalam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars / Feature Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 group hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-[1px] mb-4 group-hover:scale-105 transition-transform`}
                  >
                    <div className="w-full h-full bg-[#0a0e1a] rounded-[11px] flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

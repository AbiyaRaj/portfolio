"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export default function Experience() {
  const EXPERIENCES: ExperienceItem[] = [
    {
      role: "Full Stack Developer (Senior Lead)",
      company: "Resbee Info Tech",
      location: "India",
      period: "MAY 2022 — PRESENT",
      type: "Full-Time",
      current: true,
      description:
        "Leading frontend engineering and full-stack development for enterprise SaaS platforms, educational systems, and institutional administrative suites.",
      achievements: [
        "Leading a frontend team of 4 members, managing tasks, conducting code reviews, and ensuring timely delivery of sprint goals.",
        "Developing and maintaining a SaaS-based LMS (Learning Management System) platform using Next.js and React.js, focusing on scalable architecture for education and user engagement.",
        "Architecting SaaS modules in PHP CodeIgniter for large-scale school and college management systems with dynamic content management.",
        "Spearheading API integrations and Payment gateway API testing, guaranteeing smooth and secure communication between front-end and back-end services.",
        "Configuring and deploying services using GitHub and Jenkins continuous delivery pipelines.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "PHP (CodeIgniter)",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Payment Gateways",
        "Postman",
        "Jenkins",
        "AWS",
      ],
    },
    {
      role: "Postgraduate Researcher & Project Developer",
      company: "St. John's College of Arts & Science",
      location: "Tamil Nadu, India",
      period: "JAN 2019 — JUN 2021",
      type: "M.Sc Computer Science",
      description:
        "Completed Master of Science in Computer Science with 91% Distinction, conducting advanced computational research and image processing studies.",
      achievements: [
        "Authored and published research paper: 'Catastrophe Prevention in Highly Industrialized Areas Using Image Processing' in IJRAEM, Vol. 3, Issue 7.",
        "Engineered algorithm prototypes in image analysis, spatial filtering, and feature extraction for hazard identification.",
        "Built web application interfaces for data logging and statistical analysis using JavaScript, PHP, and relational databases.",
      ],
      technologies: [
        "Image Processing",
        "JavaScript",
        "PHP",
        "MySQL",
        "Algorithms",
        "Data Structures",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 • Career Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Work Experience &amp;{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Track Record
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
            Hands-on professional engineering history, frontend team leadership at Pitcher
            Toy Tech, and academic research milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${exp.current
                    ? "bg-indigo-600 border-indigo-400 shadow-md shadow-indigo-500/50"
                    : "bg-[#0b101d] border-white/20 group-hover:border-purple-400"
                  }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${exp.current ? "bg-white animate-pulse" : "bg-zinc-400"
                    }`}
                />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                      {exp.role}
                      {exp.current && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Active Full-Time
                        </span>
                      )}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 flex items-center gap-2 mt-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    Key Responsibilities &amp; Impact
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-zinc-400 font-medium mr-1">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

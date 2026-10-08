"use client";

import {
  FileText,
  Download,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Languages,
  BookOpen,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function Resume() {
  const EDUCATION = [
    {
      degree: "M.Sc (Computer Science)",
      institution: "St. John's College of Arts & Science",
      period: "JAN 2019 — JUN 2021",
      score: "91% (Distinction)",
      details: [
        "Specialized in Advanced Algorithms, Image Processing, Distributed Computing, and Web Engineering.",
        "Published journal article on industrial hazard prevention using computer vision.",
      ],
    },
    {
      degree: "B.Sc (Computer Science)",
      institution: "St. John's College of Arts & Science",
      period: "JAN 2016 — JAN 2019",
      score: "79% (First Class)",
      details: [
        "Core foundational studies in Data Structures, Object-Oriented Programming, Database Management Systems, and Software Engineering.",
      ],
    },
  ];

  const SUMMARY_POINTS = [
    "Over 3+ years of professional full-stack development experience, currently at Resbee Info Tech (May 2022 – Present).",
    "Proven leadership managing and mentoring a frontend engineering team of 4 members, driving timely sprint deliverables.",
    "Expertise in modern JavaScript ecosystems (Next.js, React.js) and robust backend PHP CodeIgniter architectures.",
    "Comprehensive track record in SaaS Learning Management Systems, Institutional ERPs, and Digital Libraries.",
    "Strong proficiency in Payment Gateway API integration, RESTful API testing with Postman, and Jenkins CI/CD deployment.",
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 • Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Curriculum{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Vitae
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            Detailed overview of professional experience at Resbee Info Tech, academic credentials
            from St. John&apos;s College, and research publications.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Request Full Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Abiya</span>
            </a>
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Summary & Personal Details */}
          <div className="lg:col-span-6 space-y-8">
            {/* Profile Summary Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Profile Summary
              </h3>
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm italic text-indigo-200 mb-5">
                &ldquo;To work in challenging atmosphere by exhibiting my skills with
                utmost sincerity and dedicated smart work for the growth of your
                esteemed organization along with mine.&rdquo;
              </div>
              <ul className="space-y-3">
                {SUMMARY_POINTS.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Details Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                Personal &amp; Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Address</span>
                    <span className="font-semibold text-white">Nagercoil, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Phone</span>
                    <a href="tel:+919488521731" className="font-semibold text-white hover:text-emerald-300">
                      +91 9488521731
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Email</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white hover:text-cyan-300">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Languages className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Languages</span>
                    <span className="font-semibold text-white">English, Tamil, Malayalam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Achievements */}
          <div className="lg:col-span-6 space-y-8">
            {/* Education Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Education Milestones
              </h3>
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-cyan-500/40">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-cyan-300 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs font-mono text-zinc-400 mt-1 mb-2">
                      {edu.period}
                    </p>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Card from Resume */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Achievements &amp; Publications
              </h3>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Journal Publication
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">IJRAEM</span>
                </div>
                <h4 className="text-sm font-semibold text-white mt-2 mb-1">
                  &ldquo;Catastrophe Prevention in Highly Industrialized Areas Using Image Processing&rdquo;
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Published in the International Journal of Recent Advances in Engineering &amp; Management (IJRAEM),
                  Vol. 3, Issue 7, pp. 896–901.
                </p>
              </div>

              {/* Resbee Info Tech Milestone */}
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Industry Leadership
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">May 2022 – Present</span>
                </div>
                <h4 className="text-sm font-semibold text-white mt-2 mb-1">
                  Technical Team Leadership • Resbee Info Tech
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Directing frontend architecture and a team of 4 engineers delivering SaaS LMS solutions and educational ERP platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

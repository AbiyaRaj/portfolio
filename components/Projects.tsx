"use client";

import { useState } from "react";
import {
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectItem {
  id: string;
  title: string;
  category: "SaaS" | "Enterprise" | "Productivity";
  tagline: string;
  description: string;
  metrics: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const PROJECTS: ProjectItem[] = [
    {
      id: "learning-management-system",
      title: "Learning Management System (LMS)",
      category: "SaaS",
      tagline: "Scalable SaaS-based educational LMS platform",
      description:
        "Architected scalable front-end and full-stack solutions for a modern SaaS-based LMS using Next.js and React.js. Engineered responsive student/instructor portals, course tracking, dynamic video/content delivery, and integrated PHP backend APIs with continuous GitHub deployment.",
      metrics: "Enhanced user engagement with sub-second page transitions & payment integration",
      tags: ["Next.js", "React.js", "PHP APIs", "MySQL", "GitHub Deployment", "Payment Gateway"],
      liveUrl: "https://example.com/lms",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "school-college-management-system",
      title: "School & College Management System",
      category: "Enterprise",
      tagline: "Large-scale institutional ERP for Ethiopian educational centers",
      description:
        "Specialized in PHP CodeIgniter for Ethiopian school and college administrative systems. Engineered robust front-end and back-end modules for dynamic student records, academic grading, curriculum content management, third-party API integrations, and automated Jenkins CI/CD deployment.",
      metrics: "Deployed across Ethiopian institutional networks with Jenkins CI/CD automation",
      tags: ["PHP CodeIgniter", "MySQL", "REST APIs", "Jenkins Deployment", "Bootstrap V5"],
      liveUrl: "https://example.com/school-erp",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "digital-library-platform",
      title: "Digital Library System",
      category: "Enterprise",
      tagline: "Dynamic repository and digital asset management platform",
      description:
        "Engineered using PHP CodeIgniter 3 with scalable backend architecture. Implemented high-speed book search, dynamic digital cataloging, member borrowing workflows, and secure RESTful API integrations for institutional repositories.",
      metrics: "Handles thousands of digital catalog items with optimized MySQL schema",
      tags: ["PHP CodeIgniter 3", "MySQL", "REST APIs", "Dynamic Content", "jQuery", "CSS3"],
      liveUrl: "https://example.com/digital-library",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: "human-resource-admin-modules",
      title: "Human Resource & Administration Suite",
      category: "Enterprise",
      tagline: "Complete workforce management, payroll & administration platform",
      description:
        "Developed enterprise-grade HR and administration modules using PHP CodeIgniter 4. Delivered scalable employee records management, role-based access control, attendance synchronization, and seamless Jenkins build pipelines.",
      metrics: "Streamlined administrative approval times with automated API notifications",
      tags: ["PHP CodeIgniter 4", "REST APIs", "Jenkins", "Material UI", "MySQL"],
      liveUrl: "https://example.com/hr-admin",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: "trackup-monitoring-system",
      title: "TrackUp • Employee Task Tracking",
      category: "Productivity",
      tagline: "Interactive daily task duration & productivity monitoring platform",
      description:
        "Designed and implemented interactive user interfaces in JavaScript for the TrackUp system. Enables managers to monitor employee daily tasks, log working durations, calculate productivity metrics, and generate real-time activity reports.",
      metrics: "Intuitive UI/UX providing accurate real-time duration and task metrics",
      tags: ["JavaScript", "HTML5", "CSS3", "UI/UX", "Time Tracking", "Analytics"],
      liveUrl: "https://example.com/trackup",
      githubUrl: "https://github.com",
      featured: false,
    },
  ];

  const categories = ["All", "SaaS", "Enterprise", "Productivity"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 • Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Key Software{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
            Enterprise SaaS platforms, institutional management systems, and productivity
            monitoring solutions developed and deployed in production.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${filter === cat
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/40"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="p-7 sm:p-8">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08] transition"
                      aria-label="View Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:text-white hover:bg-indigo-600 transition"
                      aria-label="View Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </h3>
                <p className="text-xs font-medium text-cyan-400 mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Metrics Highlight Pill */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 mb-5">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{project.metrics}</span>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-7 py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  GitHub &amp; Jenkins CI/CD Deployed
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-indigo-300 hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition"
                >
                  Explore Details
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

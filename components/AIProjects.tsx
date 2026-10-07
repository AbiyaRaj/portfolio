"use client";

import {
  Brain,
  Sparkles,
  Bot,
  ArrowUpRight,
  ExternalLink,
  Workflow,
  Eye,
  FileCheck,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface AIProjectItem {
  id: string;
  title: string;
  badge: string;
  icon: typeof Brain;
  tagline: string;
  description: string;
  architecture: string[];
  keyHighlight: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  isPublication?: boolean;
}

export default function AIProjects() {
  const AI_PROJECTS: AIProjectItem[] = [
    {
      id: "catastrophe-prevention-image-processing",
      title: "Catastrophe Prevention in Industrial Areas Using Image Processing",
      badge: "Published Research Paper • IJRAEM",
      icon: Eye,
      tagline: "Computer vision & hazard detection in industrial manufacturing complexes",
      description:
        "Authored and published research in the International Journal of Recent Advances in Engineering & Management (IJRAEM, Vol. 3, Issue 7, pp. 896-901). Investigated digital image processing techniques, threshold segmentation, and automated vision algorithms to detect hazardous conditions, smoke emissions, and impending industrial catastrophes before escalation.",
      architecture: [
        "Spatial Image Filtering",
        "Threshold Segmentation",
        "Edge Hazard Detection",
        "IJRAEM Vol. 3 Issue 7",
      ],
      keyHighlight: "Published research in IJRAEM journal advancing automated industrial safety monitoring",
      stack: ["Image Processing", "Computer Vision", "Python", "OpenCV", "Algorithms"],
      liveUrl: "https://example.com/publication",
      githubUrl: "https://github.com",
      isPublication: true,
    },
    {
      id: "ai-lms-learning-analytics",
      title: "Smart LMS Learning Analytics & Recommendation Engine",
      badge: "Educational Intelligence",
      icon: Brain,
      tagline: "Automated student performance insights & adaptive curriculum paths",
      description:
        "Complementing the SaaS LMS platform with algorithmic recommendation modules. Analyzes student interaction times, quiz outcomes, and drop-off rates to dynamically recommend personalized learning modules and alert instructors to at-risk students.",
      architecture: [
        "Predictive Engagement Scoring",
        "Dynamic Course Recommender",
        "REST API Microservices",
      ],
      keyHighlight: "Identifies student drop-off trends with 89% predictive accuracy",
      stack: ["Next.js", "React.js", "PHP APIs", "Python", "MySQL", "REST APIs"],
      liveUrl: "https://example.com/ai-lms",
      githubUrl: "https://github.com",
    },
    {
      id: "digital-library-ocr-indexing",
      title: "Intelligent Document Indexing & OCR Extraction",
      badge: "Document AI & Search",
      icon: FileCheck,
      tagline: "High-accuracy optical text extraction and semantic catalog search",
      description:
        "Extends the Digital Library repository with automated OCR processing pipelines. Scans institutional records, historical publications, and thesis PDFs to generate structured searchable metadata and instant keyword discovery across large volumes of digital assets.",
      architecture: [
        "OCR Extraction Pipeline",
        "Full-Text Keyword Search",
        "Automated Asset Metadata",
      ],
      keyHighlight: "Enables instant full-text discovery across scanned multi-page library documents",
      stack: ["PHP CodeIgniter", "Tesseract OCR", "MySQL", "Node.js", "REST APIs"],
      liveUrl: "https://example.com/library-ai",
      githubUrl: "https://github.com",
    },
    {
      id: "trackup-intelligent-analytics",
      title: "TrackUp Workforce Analytics & Work Duration Engine",
      badge: "Workforce Analytics",
      icon: Bot,
      tagline: "Intelligent employee task time duration analysis & productivity metrics",
      description:
        "Integrated statistical analytics engine for the TrackUp system. Detects abnormal task completion times, visualizes productivity clusters across team members, and generates actionable management summaries for optimized project resource allocation.",
      architecture: [
        "Duration Anomaly Detection",
        "Interactive Charting Visuals",
        "Exportable PDF/Excel Reports",
      ],
      keyHighlight: "Automates daily employee productivity summaries and duration audits",
      stack: ["JavaScript", "HTML5", "CSS3", "Chart.js", "PHP APIs"],
      liveUrl: "https://example.com/trackup-ai",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="ai-projects" className="py-24 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 • Research &amp; Applied Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            AI, Image Processing &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
              Research
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
            Including journal-published research in Image Processing (IJRAEM) and
            intelligent algorithmic enhancements across enterprise SaaS products.
          </p>
        </div>

        {/* AI & Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AI_PROJECTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e1628]/80 to-[#090e1a]/80 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Top Glowing bar */}
                <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="p-7 sm:p-8">
                  {/* Badge & Links */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08] transition"
                        aria-label="View Project Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500 transition"
                        aria-label="View Project Details"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </h3>
                  <p className="text-xs font-medium text-indigo-300 mt-1 mb-3">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Innovation / Benchmark Pill */}
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 mb-5 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-medium">{item.keyHighlight}</span>
                  </div>

                  {/* Architecture Badges */}
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                      Key Highlights
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.architecture.map((arch) => (
                        <span
                          key={arch}
                          className="px-2 py-0.5 rounded text-[11px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium"
                        >
                          {arch}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-7 py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                    {item.isPublication ? "Peer-Reviewed Publication" : "Intelligent System"}
                  </span>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-cyan-300 hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition"
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

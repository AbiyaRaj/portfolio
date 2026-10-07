"use client";

import { useState } from "react";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  status: "Advanced" | "Proficient" | "Skilled";
}

interface SkillCategory {
  id: string;
  name: string;
  icon: typeof Code;
  description: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const CATEGORIES: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: Code,
      description: "Modern, reactive web interfaces and component design systems",
      skills: [
        { name: "Next.js", level: 90, status: "Advanced" },
        { name: "React.js", level: 90, status: "Advanced" },
        { name: "JavaScript", level: 95, status: "Advanced" },
        { name: "HTML & CSS", level: 95, status: "Advanced" },
        { name: "Material UI", level: 85, status: "Proficient" },
        { name: "Bootstrap V5", level: 90, status: "Advanced" },
        { name: "jQuery", level: 85, status: "Proficient" },
      ],
    },
    {
      id: "backend",
      name: "Backend & Architecture",
      icon: Server,
      description: "Server-side logic, MVC frameworks, and API integration",
      skills: [
        { name: "PHP (CodeIgniter 3 & 4)", level: 90, status: "Advanced" },
        { name: "Node.js", level: 80, status: "Proficient" },
        { name: "REST APIs & Webhooks", level: 92, status: "Advanced" },
        { name: "Payment Gateway API Integration", level: 88, status: "Advanced" },
      ],
    },
    {
      id: "databases",
      name: "Databases & Cloud",
      icon: Database,
      description: "Relational/NoSQL data storage and cloud infrastructure",
      skills: [
        { name: "MySQL", level: 90, status: "Advanced" },
        { name: "MongoDB", level: 80, status: "Proficient" },
        { name: "AWS Cloud Services", level: 65, status: "Skilled" },
      ],
    },
    {
      id: "tools",
      name: "Testing & DevOps",
      icon: Wrench,
      description: "Continuous deployment, testing suites, and developer tooling",
      skills: [
        { name: "Postman API Testing", level: 92, status: "Advanced" },
        { name: "GitHub Deployment & VCS", level: 90, status: "Advanced" },
        { name: "Jenkins CI/CD Deployment", level: 82, status: "Proficient" },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 • Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Core Competencies &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
            Technologies and frameworks utilized in production environments at Pitcher
            Toy Tech and across enterprise SaaS systems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === "all"
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Skills
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="mt-6 space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-zinc-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full ${
                              skill.status === "Advanced"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : skill.status === "Proficient"
                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            }`}
                          >
                            {skill.status}
                          </span>
                          <span className="font-mono text-zinc-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      {/* Bar */}
                      <div className="w-full h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Cloud Badges from Resume */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">
            Production Stack Verified
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              "Next.js",
              "React.js",
              "JavaScript",
              "PHP (CodeIgniter)",
              "Node.js",
              "HTML5",
              "CSS3",
              "MySQL",
              "MongoDB",
              "Material UI",
              "Bootstrap V5",
              "jQuery",
              "AWS",
              "REST APIs",
              "Postman",
              "Payment Gateways",
              "Jenkins",
              "GitHub",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono hover:bg-white/[0.08] hover:text-white hover:border-indigo-500/40 transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

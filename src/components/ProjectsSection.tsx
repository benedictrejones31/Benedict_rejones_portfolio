import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { ProjectCategory } from '../types/portfolio';
import { Github, ChevronDown, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const categories: ProjectCategory[] = [
  'All',
  'Generative AI',
  'Computer Vision',
  'Applied ML',
  'Cloud & DevOps',
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-20 border-b border-border">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase font-semibold tracking-wider text-accent">
                Shipped Systems
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-text-main mt-1">
                Selected Work
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <p className="text-sm text-text-muted max-w-md">
              End-to-end architectures spanning real-time voice, fraud detection, and localized RAG systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Pills */}
        <ScrollReveal delay={0.12} className="w-full max-w-full">
          <div className="w-full max-w-full overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist" aria-label="Project category filter">
            <div className="inline-flex items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? 'text-white'
                        : 'text-text-muted bg-surface hover:text-text-main border border-border'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-accent rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`flex flex-col rounded-card bg-surface border border-border shadow-subtle hover-lift transition-all duration-200 ${
                  isFeatured ? 'md:col-span-1' : 'md:col-span-1'
                }`}
              >
                {/* Card Header & Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        {project.category}
                      </span>
                      {project.metricBadge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-soft text-accent border border-accent/20">
                          {project.metricBadge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-semibold text-text-main mb-2">
                      {project.title}
                    </h3>

                    {/* Outcome statement */}
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {project.outcome}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-surface-alt text-[11px] font-medium text-text-muted border border-border/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                    {/* Expand details button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleExpand(project.id);
                        }
                      }}
                      aria-expanded={isExpanded}
                      aria-controls={`details-${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-text-main focus-visible:ring-2 focus-visible:ring-accent rounded px-1 -ml-1 py-1"
                    >
                      <span>{isExpanded ? 'Hide Architecture' : 'How it works'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-250 ${
                          isExpanded ? 'rotate-180 text-text-main' : ''
                        }`}
                      />
                    </button>

                    {/* GitHub link (if available) */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-alt border border-border text-xs font-medium text-text-main hover:bg-border/60 hover-lift focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-3.5 h-3.5 text-text-muted" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3 h-3 text-text-muted" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-text-muted/70 italic">
                        Internal / Enterprise
                      </span>
                    )}
                  </div>
                </div>

                {/* Expandable Architecture Details Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`details-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden border-t border-border bg-surface-alt/50"
                    >
                      <div className="p-6 space-y-2.5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                          Engineering Highlights & Architecture
                        </div>
                        <ul className="space-y-2 text-xs text-text-muted leading-relaxed">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

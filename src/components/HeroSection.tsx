import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Download } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HeroSection: React.FC = () => {
  const { meta, social, stats } = portfolioData;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border bg-grid-subtle">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 min-w-0 flex flex-col justify-center">
            <ScrollReveal immediate delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-[11px] sm:text-xs font-medium text-accent tracking-wide mb-6 max-w-full">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <span className="truncate">Available for AI Engineering & Collaborations</span>
              </div>
            </ScrollReveal>

            <ScrollReveal immediate delay={0.05}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-text-main leading-tight mb-4">
                {meta.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal immediate delay={0.1}>
              <p className="text-lg sm:text-xl font-medium text-accent mb-4 tracking-tight">
                {meta.headline}
              </p>
            </ScrollReveal>

            <ScrollReveal immediate delay={0.15}>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-8">
                {meta.heroStatement}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal immediate delay={0.2}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:opacity-95 shadow-subtle hover-lift focus-visible:ring-2 focus-visible:ring-accent"
                >
                  View Selected Work
                  <ArrowUpRight className="ml-1.5 w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-surface border border-border text-text-main font-medium text-sm hover:bg-surface-alt hover-lift focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Get in Touch
                </a>

                {meta.resume?.enabled && (
                  <a
                    href={meta.resume.url}
                    download
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main hover:bg-surface-alt text-sm font-medium hover-lift"
                    title="Download Résumé PDF"
                  >
                    <Download className="mr-1.5 w-4 h-4 text-accent" />
                    Résumé
                  </a>
                )}
              </div>
            </ScrollReveal>

            {/* Quiet Icon Links */}
            <ScrollReveal immediate delay={0.24}>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-text-muted font-medium mr-1">
                  Connect:
                </span>
                
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main hover:border-accent hover-lift"
                  aria-label="GitHub Profile"
                  title="GitHub: benedictrejones31"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main hover:border-accent hover-lift"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: W Benedict Rejones"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main hover:border-accent hover-lift"
                  aria-label="LeetCode Profile"
                  title="LeetCode: benedictrejones"
                >
                  <Code2 className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${social.email}`}
                  className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main hover:border-accent hover-lift"
                  aria-label="Send Email"
                  title={`Email: ${social.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Profile & At A Glance Card */}
          <div className="lg:col-span-5 min-w-0 flex flex-col gap-6">
            
            {/* Profile Photo (if enabled) */}
            {meta.profilePhoto?.enabled && (
              <ScrollReveal immediate delay={0.1}>
                <div className="bg-surface border border-border rounded-card p-3 shadow-subtle">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-surface-alt border border-border/50">
                    <img
                      src={meta.profilePhoto.src}
                      alt={meta.profilePhoto.alt}
                      className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.02]"
                      loading="eager"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-surface/90 backdrop-blur-sm border border-border/80 px-3 py-1.5 rounded-lg flex items-center justify-between">
                      <span className="text-xs font-medium text-text-main">
                        W Benedict Rejones
                      </span>
                      <span className="text-[11px] text-accent font-semibold tracking-wide uppercase">
                        AI Engineer
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* At a glance card */}
            <ScrollReveal immediate delay={0.18}>
              <div className="bg-surface border border-border rounded-card p-4 sm:p-6 shadow-subtle">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                  <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-text-muted">
                    At a Glance
                  </h3>
                  <span className="text-[11px] sm:text-xs text-accent font-medium">
                    Verified Outcomes
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-xl bg-surface-alt/60 border border-border/60 hover-lift"
                    >
                      <div className="text-sm sm:text-base lg:text-lg font-serif font-semibold text-text-main tracking-tight truncate">
                        {stat.metric}
                      </div>
                      <div className="text-[11px] sm:text-xs font-medium text-accent mt-0.5 truncate">
                        {stat.label}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-text-muted mt-1 leading-snug line-clamp-2">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};

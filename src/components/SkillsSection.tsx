import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 border-b border-border">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <ScrollReveal delay={0}>
            <span className="text-xs uppercase font-semibold tracking-wider text-accent">
              Core Competencies
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-text-main mt-1 mb-4">
              Technical Skills
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Organized by engineering discipline. Focused on tools and frameworks applied in production and verified systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, idx) => (
            <ScrollReveal key={group.category} delay={0.06 * (idx % 4)}>
              <div className="h-full p-5 rounded-card bg-surface border border-border shadow-subtle hover-lift flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-text-main pb-3 mb-3 border-b border-border/70 flex items-center justify-between">
                    <span>{group.category}</span>
                    <span className="text-[11px] font-mono text-accent">
                      {group.skills.length}
                    </span>
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-alt text-text-main border border-border/70 hover:border-accent/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 text-[11px] text-text-muted">
                  Production ready
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};


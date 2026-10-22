import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Cpu, Eye, Server } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  const focusIcons = [
    <Cpu className="w-5 h-5 text-accent" />,
    <Eye className="w-5 h-5 text-accent" />,
    <Server className="w-5 h-5 text-accent" />,
  ];

  return (
    <section id="about" className="py-20 border-b border-border">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <ScrollReveal delay={0}>
            <span className="text-xs uppercase font-semibold tracking-wider text-accent">
              Background & Principles
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-text-main mt-1 mb-4">
              About Me
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {about.narrative}
            </p>
          </ScrollReveal>
        </div>

        {/* What I work on */}
        <div>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xs uppercase font-semibold tracking-wider text-text-muted mb-6">
              What I Work On
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.focusAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={0.18 + index * 0.05}>
                <div className="h-full p-6 rounded-card bg-surface border border-border hover-lift shadow-subtle flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                      {focusIcons[index] || <Cpu className="w-5 h-5 text-accent" />}
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-text-main mb-2">
                      {area.title}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center text-xs font-medium text-accent">
                    Core Capability 0{index + 1}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


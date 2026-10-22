import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Trophy } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const RecognitionSection: React.FC = () => {
  const { recognition } = portfolioData;

  return (
    <section id="recognition" className="py-20 border-b border-border">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <ScrollReveal delay={0}>
            <span className="text-xs uppercase font-semibold tracking-wider text-accent">
              Honors & Activities
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-text-main mt-1 mb-4">
              Recognition & Hackathons
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Competitive hackathon finishes, algorithmic benchmarks, and continuous technical upskilling.
            </p>
          </ScrollReveal>
        </div>

        {/* Calm Two-Column List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recognition.map((item, index) => (
            <ScrollReveal key={item.title} delay={0.06 * index}>
              <div className="p-6 rounded-card bg-surface border border-border shadow-subtle hover-lift flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-serif font-semibold text-text-main">
                      {item.title}
                    </h3>
                    {item.highlight && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-alt text-accent border border-border">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

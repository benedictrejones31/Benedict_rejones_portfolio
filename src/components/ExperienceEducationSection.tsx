import React from 'react';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ExperienceEducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-border">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <ScrollReveal delay={0}>
            <span className="text-xs uppercase font-semibold tracking-wider text-accent">
              Academic Foundation
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-text-main mt-1 mb-4">
              Education
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Rigorous academic coursework and engineering specialization in machine learning systems, deep neural networks, and data architectures.
            </p>
          </ScrollReveal>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          {education.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.12}>
              <div className="p-6 sm:p-8 rounded-card bg-surface border border-border shadow-subtle hover-lift">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-accent flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <div className="text-xs text-text-muted font-medium">
                        Completed Degree
                      </div>
                    </div>
                  </div>

                  {item.cgpa && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent border border-accent/20">
                      CGPA: {item.cgpa}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-text-main mb-1.5">
                  {item.degree}
                </h3>
                
                <p className="text-sm sm:text-base font-medium text-text-muted mb-6">
                  {item.institution}
                </p>

                {item.details && (
                  <div className="border-t border-border/80 pt-5 space-y-3">
                    <div className="text-xs uppercase font-semibold tracking-wider text-text-muted">
                      Academic Highlights & Coursework
                    </div>
                    <ul className="space-y-2.5">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};


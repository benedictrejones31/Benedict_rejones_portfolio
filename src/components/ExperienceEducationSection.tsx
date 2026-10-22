import React from 'react';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, BookmarkCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ExperienceEducationSection: React.FC = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-border">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <ScrollReveal delay={0}>
            <span className="text-xs uppercase font-semibold tracking-wider text-accent">
              Academic & Professional Foundation
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-text-main mt-1 mb-4">
              Education & Certifications
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Rigorous coursework in computational intelligence combined with industry-standard credentials in cloud, analytics, and software engineering.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Timeline (Left Column) */}
          <div className="lg:col-span-7 min-w-0">
            <ScrollReveal delay={0.12}>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-accent" />
                <h3 className="text-base font-serif font-semibold text-text-main">
                  Academic Degree
                </h3>
              </div>
            </ScrollReveal>

            <div className="space-y-6 relative border-l-2 border-border/80 ml-4 pl-4 sm:pl-6">
              {education.map((item, idx) => (
                <ScrollReveal key={idx} delay={0.15}>
                  <div className="relative group">
                    {/* Timeline Node */}
                    <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg" />

                    <div className="p-6 rounded-card bg-surface border border-border shadow-subtle hover-lift">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        {item.cgpa && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-soft text-accent border border-accent/20">
                            CGPA: {item.cgpa}
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-serif font-semibold text-text-main mb-1">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-medium text-text-muted mb-4">
                        {item.institution}
                      </p>

                      {item.details && (
                        <ul className="space-y-2 text-xs text-text-muted leading-relaxed border-t border-border/60 pt-3">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Certifications (Right Column) */}
          <div className="lg:col-span-5 min-w-0">
            <ScrollReveal delay={0.14}>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-accent" />
                <h3 className="text-base font-serif font-semibold text-text-main">
                  Professional Certifications
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="p-6 rounded-card bg-surface border border-border shadow-subtle space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="p-3 rounded-lg bg-surface-alt/70 border border-border/70 hover:border-accent/40 transition-colors flex items-start gap-3"
                    >
                      <BookmarkCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-text-main leading-snug">
                          {cert.name}
                        </div>
                        <div className="text-[11px] text-text-muted mt-0.5">
                          {cert.issuer}
                        </div>
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

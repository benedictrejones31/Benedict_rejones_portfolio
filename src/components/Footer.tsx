import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-surface border-t border-border">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Attribution & Monogram */}
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-surface-alt border border-border flex items-center justify-center font-serif text-xs font-semibold text-accent">
            {portfolioData.meta.monogram}
          </span>
          <p className="text-xs text-text-muted">
            © {currentYear} {portfolioData.meta.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-main hover:border-accent p-2 rounded-lg bg-surface-alt border border-border transition-colors hover-lift focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-accent" />
        </button>

      </div>
    </footer>
  );
};


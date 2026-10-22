import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Recognition', href: '#recognition' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map(link => ({
        id: link.href.substring(1),
        element: document.getElementById(link.href.substring(1)),
      }));

      const scrollPosition = window.scrollY + 120;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element) {
          const top = item.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-md border-b border-border shadow-subtle'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-1.5 -ml-1.5"
            aria-label="W Benedict Rejones home"
          >
            <span className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-serif text-sm font-semibold text-accent group-hover:border-accent transition-colors">
              WBR
            </span>
            <span className="hidden sm:inline font-sans font-medium text-sm text-text-main tracking-tight">
              Benedict Rejones
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-text-main font-semibold'
                      : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main hover:border-accent transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <motion.div
                  initial={false}
                  animate={{
                    rotate: theme === 'dark' ? 90 : 0,
                    opacity: theme === 'dark' ? 0 : 1,
                    scale: theme === 'dark' ? 0.7 : 1,
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute"
                >
                  <Sun className="w-4 h-4 text-text-muted" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    rotate: theme === 'dark' ? 0 : -90,
                    opacity: theme === 'dark' ? 1 : 0,
                    scale: theme === 'dark' ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute"
                >
                  <Moon className="w-4 h-4 text-accent" />
                </motion.div>
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-border bg-surface px-4 py-3"
            >
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-alt transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

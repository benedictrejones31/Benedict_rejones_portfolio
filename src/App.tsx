import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { RecognitionSection } from './components/RecognitionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text-main selection:bg-accent-soft selection:text-text-main w-full max-w-full overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceEducationSection />
        <RecognitionSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;

import { useCallback, useState } from 'react';
import { JPK_PROGRAMS } from './config/gisConfig';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ParentAssuranceSection } from './components/ParentAssuranceSection';
import { ProgramsSection } from './components/ProgramsSection';
import { EligibilityFormSection } from './components/EligibilityFormSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<string>(JPK_PROGRAMS[0].title);

  useScrollReveal();

  const scrollToEligibilityForm = useCallback(() => {
    const target = document.getElementById('semak-kelayakan');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectProgramFromCard = useCallback(
    (programTitle: string) => {
      setSelectedProgram(programTitle);
      scrollToEligibilityForm();
    },
    [scrollToEligibilityForm]
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onNavigateToForm={scrollToEligibilityForm} />
      <main className="flex-1">
        <HeroSection onPrimaryCta={scrollToEligibilityForm} />
        <ParentAssuranceSection onConsultClick={scrollToEligibilityForm} />
        <ProgramsSection onSelectProgram={handleSelectProgramFromCard} />
        <EligibilityFormSection
          selectedProgram={selectedProgram}
          onProgramChange={setSelectedProgram}
        />
      </main>
      <Footer />
    </div>
  );
}

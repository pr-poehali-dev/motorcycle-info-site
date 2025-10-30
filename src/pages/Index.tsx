import { useState } from 'react';
import { motorcycles } from '@/data/motorcycles';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { PopularModels } from '@/components/sections/PopularModels';
import { StatsSection } from '@/components/sections/StatsSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { SpecsSection } from '@/components/sections/SpecsSection';
import { EnginesSection } from '@/components/sections/EnginesSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Index() {
  const [selectedBikes, setSelectedBikes] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState('главная');

  const toggleComparison = (id: number) => {
    setSelectedBikes((prev) =>
      prev.includes(id) ? prev.filter((bikeId) => bikeId !== id) : prev.length < 2 ? [...prev, id] : prev
    );
  };

  const comparedBikes = motorcycles.filter((bike) => selectedBikes.includes(bike.id));

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {activeSection === 'главная' && (
        <div className="pt-20">
          <HeroSection
            backgroundImage={motorcycles[0].image}
            onNavigateToCatalog={() => setActiveSection('каталог')}
            onNavigateToComparison={() => setActiveSection('сравнение')}
          />
          <PopularModels
            motorcycles={motorcycles}
            onViewDetails={() => setActiveSection('характеристики')}
          />
          <StatsSection />
        </div>
      )}

      {activeSection === 'каталог' && (
        <CatalogSection
          motorcycles={motorcycles}
          selectedBikes={selectedBikes}
          onViewSpecs={() => setActiveSection('характеристики')}
          onToggleComparison={toggleComparison}
        />
      )}

      {activeSection === 'характеристики' && (
        <SpecsSection motorcycles={motorcycles} />
      )}

      {activeSection === 'двигатели' && (
        <EnginesSection motorcycles={motorcycles} />
      )}

      {activeSection === 'сравнение' && (
        <ComparisonSection
          comparedBikes={comparedBikes}
          onToggleComparison={toggleComparison}
          onNavigateToCatalog={() => setActiveSection('каталог')}
        />
      )}

      {activeSection === 'контакты' && (
        <ContactSection />
      )}

      <Footer onSectionChange={setActiveSection} />
    </div>
  );
}

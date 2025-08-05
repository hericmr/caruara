import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import StorySection from '../../components/StorySection/StorySection';
import { storyContent } from '../../data/storyContent';

const Remedios: React.FC = () => {
  // Filtra apenas as seções de remédios
  const remediosSections = storyContent.filter(section => section.category === 'remedios');

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="section-padding">
        <div className="container-custom">
          <h2 className="text-h2 font-serif cosmic-title mb-8 text-center">Remédios Tradicionais</h2>
          {remediosSections.map(section => (
            <StorySection key={section.id} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Remedios; 
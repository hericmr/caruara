import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import { storyContent } from '../../data/storyContent';

const Home: React.FC = () => {
  // Junta todo o conteúdo do livro em um texto corrido
  const fullText = storyContent.map(section => section.content.join('\n\n')).join('\n\n');

  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="inicio">
        <Header />
      </section>
      <main className="section-padding">
        <div className="container-custom">
          <section id="livro" className="mb-16">
            <h1 className="text-h3 font-serif text-white mb-8 text-center">
              Lembranças de infância e o uso de ervas:<br />
              uma narrativa coletiva
            </h1>
            <div className="cosmic-text text-body leading-relaxed text-justify whitespace-pre-line">
              {fullText}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home; 
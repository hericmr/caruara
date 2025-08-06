import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://www.notion.so/images/page-cover/webb1.jpg")'
        }}
      >
        {/* Overlay gradiente estelar com transição suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-black/90"></div>
      </div>
      
      {/* Conteúdo do header */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl mb-4 text-shadow-lg cosmic-title">
          Caruara:
        </h1>
        <h2 className="font-typewriter font-normal text-3xl md:text-5xl lg:text-6xl leading-tight cosmic-text">
          um livro a céu aberto
        </h2>
        
        {/* Elementos estelares decorativos */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-32 right-1/4 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-pulse delay-2000"></div>
      </div>
    </header>
  );
};

export default Header; 
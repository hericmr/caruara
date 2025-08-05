import React from 'react';
import type { StorySection as StorySectionType } from '../../data/storyContent';

interface StorySectionProps {
  section: StorySectionType;
  className?: string;
}

const StorySection: React.FC<StorySectionProps> = ({ section, className = '' }) => {
  return (
    <section 
      id={section.id}
      className={`card mb-8 animate-slide-up ${className}`}
    >
      <h2 className="text-h2 font-serif cosmic-title mb-6 pb-3 border-b-2 border-blue-400/20">
        {section.title}
      </h2>
      
      <div className="space-y-6">
        {section.content.map((paragraph, index) => (
          <p 
            key={index}
            className="text-body cosmic-text leading-relaxed text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default StorySection; 
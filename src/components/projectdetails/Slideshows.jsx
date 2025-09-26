// components/ProjectDetailSections/Slideshows.jsx
import React from 'react';

export function Slideshows({ project }) {
  const slideEmbeds = Object.entries(project)
    .filter(([key]) => key.startsWith('slideEmbed') && !key.includes('_title'))
    .map(([key, value]) => {
      const num = key.replace('slideEmbed', '');
      return {
        src: value,
        title: project[`slideEmbed${num}_title`] || `Slideshow ${num}`,
      };
    });

  if (slideEmbeds.length === 0) return null;

  return (
    <div className="slides-wrapper">
      {slideEmbeds.map((slide, index) => (
        <div key={index} className="single-slide">
          <h2 className='slide_title'>{slide.title}</h2>
          <iframe
            src={slide.src}
            allowFullScreen
            title={`Slide ${index + 1}`}
            className="slide-iframe"
          />
        </div>
      ))}
    </div>
  );
}

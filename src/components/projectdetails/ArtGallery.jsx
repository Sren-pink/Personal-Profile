// components/ProjectDetailSections/ArtGallery.jsx
import React from 'react';

export function ArtGallery({ artGallery }) {
  if (!artGallery || artGallery.length === 0) return null;

  return (
    <div className="art-gallery">
      <h2 className='gallery_title'>Art Gallery</h2>
      <div className="gallery-grid">
        {artGallery.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.image[0]} alt={`Gallery ${index + 1}`} className="gallery-img" />
            <p className="gallery-caption">{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import '../style/AutoSlideLoop.css'; // Create and import a separate CSS file for styling
import { logoItems } from "../data/teams";
export const Teams = () => {
  useEffect(() => {
    const logosSlide = document.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  

  return (
    <div className="logos">
      <div className="logos-slide">
        {logoItems.map((item, index) => (
          <div key={index} className="logo-item">
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
            <button>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

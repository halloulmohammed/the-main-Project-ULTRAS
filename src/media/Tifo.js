import React, { useState } from 'react';
import { pictures } from '../data/tifo';
import '../style/Tifo.css';

export const Tifo = () => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  console.log(selectedPicture);
  const handleClick = (picture) => {
    setSelectedPicture(picture);
  
  };
  const handleClose = () => {
    setSelectedPicture(null);
  };

  return (
    <div className="card-container">
      {pictures.map((picture) => (
          <button onClick={() => handleClick(picture)} key={picture.id}>
            <img src={picture.imageUrl} className="card-img" alt={picture.title}  />
          </button>
      ))}

      {selectedPicture && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={selectedPicture.imageUrl} alt={selectedPicture.title} />
            <p>{selectedPicture.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};







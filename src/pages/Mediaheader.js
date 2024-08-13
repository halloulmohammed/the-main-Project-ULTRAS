import React, { useState } from "react";
import "../style/mediaheader.css";
import { VideoPlayer } from "../media/VideoPlayer";
import { MusicPlayer } from "../musicplayer/MusicPlayer";
import { pictures } from '../data/tifo';

export const Mediaheader = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [selectedPicture, setSelectedPicture] = useState(null);
  console.log(selectedPicture);
  const handleClick = (picture) => {
    setSelectedPicture(picture);
  
  };
  const handleClose = () => {
    setSelectedPicture(null);
  };
  return (
    <div className="wrapper pre">
      <div className="wrapper">
        <div className="tab-container">
          <div className="tab-card tabs">
            <input
              id="tab-1"
              type="radio"
              className="tab tab-selector"
              name="tab"
              defaultChecked={activeTab === 0}
              
            />
            <label
              htmlFor="tab-1"
              className="tab tab-primary"
              onClick={() => handleTabClick(0)}
            >
            Tifo
            </label>

            <input
              id="tab-2"
              type="radio"
              className="tab tab-selector"
              name="tab"
              defaultChecked={activeTab === 1}
            />
            <label
              htmlFor="tab-2"
              className="tab tab-success"
              onClick={() => handleTabClick(1)}
            >
             Videos
            </label>

            <input
              id="tab-3"
              type="radio"
              className="tab tab-selector"
              name="tab"
              defaultChecked={activeTab === 2}
            />
            <label
              htmlFor="tab-3"
              className="tab tab-default"
              onClick={() => handleTabClick(2)}
            >
              Songs
            </label>

            <input
              id="tab-4"
              type="radio"
              className="tab tab-selector"
              name="tab"
              defaultChecked={activeTab === 3}
            />
            <div className="glider"></div>
            <section className="content">
              <div className={`item ${activeTab === 0 ? 'active' : ''}`} id="content-1">
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
              </div>
              <div className={`item ${activeTab === 1 ? 'active' : ''}`} id="content-2">
                <VideoPlayer />
              </div>
              <div className={`item ${activeTab === 2 ? 'active' : ''}`} id="content-3">
                <MusicPlayer />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

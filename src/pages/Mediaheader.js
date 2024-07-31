import React, { useState } from "react";
import "../style/mediaheader.css";
import { Tifo } from "../media/Tifo";
import { VideoPlayer } from "../media/VideoPlayer";
import { MusicPlayer } from "../musicplayer/MusicPlayer";

export const Mediaheader = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
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
                <Tifo />
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

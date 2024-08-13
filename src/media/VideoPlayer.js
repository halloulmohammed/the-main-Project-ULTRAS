import React, { useState } from 'react';
import '../style/VideoGallery.css'; // Adjust the CSS file path as per your project
import { videos } from '../data/vedios'; // Assuming you have a videos data file

export const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div className='video-container' key={video.id}>
          <button onClick={() => handleVideoClick(video)}>
            <img src={video.thumbnailUrl} alt={video.title} />
          </button>
          <p>{video.title}</p>
        </div>
      ))}

      {selectedVideo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <div className="video-container">
              <iframe
                title={selectedVideo.title}
                width="700"
                height="470"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                allowFullScreen
              ></iframe>
            </div>
            <p className='vid-title'>{selectedVideo.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

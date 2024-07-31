// SocialMedia.js
import React, { useState } from 'react';
import '../style/SocialButtons.css'; // Ensure the CSS file is in the correct directory

export const SocialMedia = () => {
  const [likes, setLikes] = useState(0); // Number of likes
  const [liked, setLiked] = useState(false); // To track if the item is liked

  const handleLike = () => {
    setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1);
    setLiked(prevLiked => !prevLiked);
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href); // Current page URL
    const text = encodeURIComponent('Check out this awesome content!'); // Custom message
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'instagram':
        alert('Instagram does not support direct sharing via URL. Please share manually.');
        break;
      case 'reddit':
        window.open(`https://www.reddit.com/submit?url=${url}&title=${text}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="social-buttons">
      <button className="like-btn" onClick={handleLike}>
        <i className={`fas fa-thumbs-up ${liked ? 'liked' : ''}`}></i><span id='likes'>{likes}</span>
      </button>
        <button onClick={() => handleShare('twitter')} className="share-btn twitter-btn">
          <i className="fab fa-x-twitter"></i>
        </button>
        <button onClick={() => handleShare('facebook')} className="share-btn facebook-btn">
          <i className="fab fa-facebook-f"></i> 
        </button>
        <button onClick={() => handleShare('instagram')} className="share-btn instagram-btn">
          <i className="fab fa-instagram"></i> 
        </button>
        <button onClick={() => handleShare('reddit')} className="share-btn reddit-btn">
          <i className="fab fa-reddit-alien"></i>
        </button>
    </div>
  );
};

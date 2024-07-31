import React, { useState } from "react";
import "../style/comments.css";
export const Comments = () => {
  const [comments, setComments] = useState([{}]);
  const [newComment, setNewComment] = useState("");
  const [username, setusername] = useState("");

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleuserName = (e) => {
    setusername(e.target.value);
  };
  const handleAddComment = () => {
    if (newComment.trim() && username.trim()) {
      setComments([...comments, { name: username, comment: newComment }]);
      setusername("");
      setNewComment("");
    }
  };
  const startIndex = 1;
  return (
    <div id="comments-section">
      <div className="comment-container">
        <input
          type="text"
          value={username}
          onChange={handleuserName}
          placeholder="enter your name"
          id="usrname-input"
        />
        <input
          value={newComment}
          onChange={handleInputChange}
          placeholder="Add a comment"
          rows="4" // Adjust the number of rows as needed
          cols="50" // Adjust the number of columns as needed
          id="comment-input"
        />

        <button onClick={handleAddComment}>Submit</button>
      </div>
      <div>
        {comments.length > 1 ? (
          comments.slice(startIndex).map((comment, index) => (
            <div key={index} className="comment-box">
              <h3>{comment.name}</h3>
              <p>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>No comment yet.</p>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Feedback = () => {
  const { resourceId } = useParams();
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/resources/${resourceId}/feedback`, { rating, comments });
      alert('Feedback submitted successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Leave Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;

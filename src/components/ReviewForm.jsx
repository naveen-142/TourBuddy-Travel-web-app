import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export default function ReviewForm({ addReview }) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText && rating && name) {
      addReview({ reviewText, rating, name });
      setReviewText("");
      setRating(0);
      setName("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Submit Your Review</h3>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            onClick={() => handleRatingClick(index)}
            color={index < rating ? "gold" : "gray"}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <textarea
        rows="4"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here..."
        required
      />
      <button type="submit">Submit</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input, textarea {
    width: 100%;
    max-width: 400px;
    margin: 1rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: blue;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: darkblue;
    }
  }
  .stars {
    margin-bottom: 1rem;
    display: flex;
  }
`;

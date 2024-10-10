import React, { useState } from "react";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";
import Testimonials from "./Testimonials";

export default function ReviewsAndForm() {
  const [reviews, setReviews] = useState([
    { reviewText: "This is very good for travels!", rating: 4, name: "Rajesh" },
    { reviewText: "Amazing experience, highly recommend!", rating: 5, name: "Aisha" },
    { reviewText: "Good service, but could be better.", rating: 3, name: "Rahul" },
  ]);

  const addReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <Wrapper>
      <div className="left-section">
        <Testimonials reviews={reviews} />
      </div>
      <div className="right-section">
        <ReviewForm addReview={addReview} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f0f0f0;

  .left-section {
    width: 60%; /* Adjust this for your layout preference */
    margin-right: 2rem;
  }

  .right-section {
    width: 35%; /* Adjust this for your layout preference */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .left-section,
    .right-section {
      width: 100%;
      margin: 0;
    }
  }
`;

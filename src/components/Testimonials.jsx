import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa"; // Import star icons for ratings

export default function Testimonials({ reviews }) {
  return (
    <TestimonialContainer>
      {reviews.map((review, index) => (
        <div key={index} className="testimonial">
          <div className="review-header">
            <h4>{review.name}</h4>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < review.rating ? "gold" : "gray"} />
              ))}
            </div>
          </div>
          <p>{review.reviewText}</p>
        </div>
      ))}
    </TestimonialContainer>
  );
}

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .testimonial {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .stars {
      display: flex;
      gap: 0.25rem;
    }
  }
`;

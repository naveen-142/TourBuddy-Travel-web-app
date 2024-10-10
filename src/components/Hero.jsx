import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import homeImage from "../assets/hero.png";

const tours = [
  { title: "Agra: Home to the Iconic Taj Mahal", path: "/tours/agra" },
  { title: "Kerala", path: "/tours/kerala" },
  { title: "Jaipur", path: "/tours/jaipur" },
  // Add more tours as needed
];

export default function Hero() {
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    const foundTour = tours.find(tour =>
      tour.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (foundTour) {
      navigate(foundTour.path); // Navigate to the tour's path
      setErrorMessage(""); // Clear the error message when a match is found
    } else {
      setErrorMessage("Sorry, no matching tour found. Please scroll down for more tours."); // Display error message

      // Set timeout to clear the error message after 3 seconds (3000ms)
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 3 seconds
      }, 3000);
    }
  };

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Tour Buddy: Unleashing Local Exploration</h1>
          <p>
            Discover unique experiences tailored to your interests with Tour Buddy.
            Whether you're seeking hidden gems, cultural hotspots, or
            adventure trails, we've got you covered. Embark on personalized journeys and explore like never before!
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where do you want to go?</label>
            <input 
              type="text" 
              placeholder="Search Your location" 
              value={searchInput} // Bind the input to state
              onChange={(e) => setSearchInput(e.target.value)} // Update state on change
            />
          </div>
          <div className="container">
            <label htmlFor="members">Number of Members Traveling</label>
            <input type="number" id="members" placeholder="Enter number of travelers" />
          </div>
          <div className="container">
            <label htmlFor="exploreDate">When Did You Explore?</label>
            <input type="date" id="exploreDate" />
          </div>

          <button onClick={handleSearch}>Explore Now</button> {/* Call handleSearch on click */}

          {/* Display error message inside the UI */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }

      /* Styles for error message */
      .error-message {
        color: red;
        font-size: 1rem;
        margin-top: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/IndianTours/Destination1.jpg"; 
import Destination2 from "../assets/IndianTours/Destination2.jpg"; 
import Destination3 from "../assets/IndianTours/Destination3.jpg"; 
import Destination4 from "../assets/IndianTours/Destination4.jpg"; 
import Destination5 from "../assets/IndianTours/Destination5.jpg"; 
import Destination6 from "../assets/IndianTours/Destination6.jpg"; 

// Best tours
import tour1 from "../assets/BestTours/tour1.jpg";
import tour2 from "../assets/BestTours/tour2.jpg";
import tour3 from "../assets/BestTours/tour3.jpg";
import tour4 from "../assets/BestTours/tour4.jpg";
import tour5 from "../assets/BestTours/tour5.png";
import tour6 from "../assets/BestTours/tour6.jpg";

// Hidden tours

import hiddengems1 from "../assets/HiddenGems/hiddengems1.jpg";
import hiddengems2 from "../assets/HiddenGems/hiddengems2.jpg";
import hiddengems3 from "../assets/HiddenGems/hiddengems3.jpg";
import hiddengems4 from "../assets/HiddenGems/hiddengems4.jpg";
import hiddengems5 from "../assets/HiddenGems/hiddengems5.jpeg";
import hiddengems6 from "../assets/HiddenGems/hiddengems6.jpg";




export default function Recommend() {
  const weekendBreakTours = [
     {
        image: Destination1,
        title: "Agra: Home to the Iconic Taj Mahal",
        subTitle: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World.",
        visit: "October to February",
        Activities: "Take a sunrise or sunset tour of the Taj Mahal, explore the Agra Fort, and visit the nearby Fatehpur Sikri",
        description: "Agra, a city in northern India, is a must-visit destination for anyone interested in history, architecture, and romance.The Taj Mahal, a UNESCO World Heritage site, is a breathtakingly beautiful monument that attracts millions of visitors each year.This stunning white marble mausoleum was built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal.",
      },
      {
        image: Destination2,
        title: "Kerala",
        subTitle: "Known as 'God’s Own Country' for its backwaters and lush landscapes.",
        visit: "September to February",
        Activities: "Take a houseboat ride, visit the tea plantations, and explore the local markets",
        description: "Kerala, a state in southwestern India, is famous for its tranquil backwaters, lush green landscapes, and rich cultural heritage. This tropical paradise is home to numerous beaches, temples, and wildlife sanctuaries. Visitors can enjoy a relaxing houseboat ride along the backwaters, explore the tea plantations, or trek through the Western Ghats.",
      },
      {
        image: Destination3,
        title: "Jaipur",
        subTitle: "The Pink City, known for its forts, palaces, and vibrant culture.",
        visit: "October to March",
        Activities: "Explore the Amber Fort, visit the City Palace, and shop for local handicrafts",
        description: "Jaipur, the capital of Rajasthan, is a vibrant city known for its stunning palaces, forts, and bustling markets. The city is painted pink, giving it a unique and picturesque appearance. Visitors can explore the majestic Amber Fort, visit the City Palace, and shop for local handicrafts and textiles.",
      },
      {
        image: Destination4,
        title: "Goa",
        subTitle: "Famous for its beaches, vibrant nightlife, and Portuguese heritage.",
        visit: "November to February",
        Activities: " Relax on the beaches, explore the historic sites, and enjoy the local seafood",
        description: "Goa, a state in western India, is famous for its stunning beaches, vibrant nightlife, and rich Portuguese heritage. Visitors can relax on the beautiful beaches, explore the historic churches and temples, and enjoy the local seafood.",
      },
      {
        image: Destination5,
        title: "Ladakh",
        subTitle: "A haven for adventure enthusiasts, offering stunning landscapes.",
        visit: "June to September",
        Activities: "Explore the landscapes, visit the monasteries, and enjoy adventure activities",
        description:"Ladakh, a region in northern India, is known for its breathtaking landscapes, ancient monasteries, and adventure activities. Visitors can explore the stunning landscapes, visit the monasteries, and enjoy activities like trekking, biking, and rafting.",
      },
      {
        image: Destination6,
        title: "Varanasi",
        subTitle: "One of the oldest cities in the world, known for spiritual significance.",
        visit: "October to February",
        Activities: "Take a boat ride along the Ganges, explore the temples, and experience the local culture",
        description: "Varanasi, a city in northern India, is one of the oldest continuously inhabited cities in the world. This spiritual city is known for its ghats along the Ganges River, ancient temples, and vibrant markets. Visitors can take a boat ride along the Ganges, explore the temples, and experience the local culture.",
      },
    ];
    

  const packageHolidayTours = [
    {
      image: tour1,
      title: "Paris",
      subTitle: "The city of love, known for its art, culture, and iconic landmarks.",
      visit: "April to October",
      Activities: "Explore the Louvre Museum, visit the Eiffel Tower, and enjoy the local cuisine",
      description: "Paris, the capital of France, is a must-visit destination for anyone interested in art, history, and romance. The city is famous for its iconic Eiffel Tower, world-class art museums, and charming streets. Visitors can explore the Louvre Museum, visit the Notre-Dame Cathedral, and enjoy the local cuisine.",
    },
    {
      image: tour2,
      title: "Rome, Italy",
      subTitle: "Rich in History with Landmarks like the Colosseum and Vatican City",
      visit: "April to October",
      Activities: " Explore the Colosseum, visit the Vatican City, and indulge in the local cuisine",
      description: "Rome, the capital of Italy, is a city steeped in history and architecture. Visitors can explore the ancient Colosseum, visit the Vatican City, and indulge in the local cuisine. The city is also famous for its beautiful piazzas, fountains, and gardens.",
    },
    {
      image: tour3,
      title: "Kyoto, Japan",
      subTitle: "Famous for its Classical Buddhist Temples, Gardens, and Traditional Wooden Houses",
      visit: "March to May or September to November",
      Activities: " Explore the temples, visit the gardens, and stroll through the bamboo grove",
      description: "Kyoto, a city in Japan, is famous for its classical Buddhist temples, beautiful gardens, and traditional wooden houses. Visitors can explore the Fushimi Inari Shrine, visit the Kinkaku-ji Temple, and stroll through the Arashiyama Bamboo Grove",
    },
    {
      image: tour4,
      title: "New York City, USA",
      subTitle: "Known for its Skyline, Broadway Shows, and Diverse Culture",
      visit: "April to October",
      Activities: " Explore the Statue of Liberty, visit the Metropolitan Museum of Art, and enjoy the local cuisine",
      description: "Sydney, the capital of Australia, is a stunning city known for its iconic Opera House, Harbour Bridge, and beautiful beaches. Visitors can explore the Sydney Opera House, visit the Harbour Bridge, and enjoy the local beaches.",
    },
    {
      image: tour5,
      title: " Sydney, Australia",
      subTitle: "Iconic for its Opera House, Harbour Bridge, and Beautiful Beaches",
      visit: "September to November or March to May",
      Activities: " Explore the Sydney Opera House, visit the Harbour Bridge, and enjoy the local beaches",
      description: "Rome, the capital of Italy, is a city steeped in history and architecture. Visitors can explore the ancient Colosseum, visit the Vatican City, and indulge in the local cuisine. The city is also famous for its beautiful piazzas, fountains, and gardens.",
    },
    {
      image: tour6,
      title: "Cape Town, South Africa",
      subTitle: "Offers Stunning Landscapes, Table Mountain, and Vibrant Culture",
      visit: "September to November or March to May",
      Activities: "Explore the Table Mountain, visit the Cape of Good Hope, and enjoy the local cuisine",
      description: "Cape Town, a city in South Africa, is a stunning destination known for its breathtaking landscapes, iconic Table Mountain, and vibrant culture. Visitors can explore the Table Mountain, visit the Cape of Good Hope, and enjoy the local cuisine.",
    },
  ];



  const HiddenGemsofAsia = [
    {
      image: hiddengems1,
      title: "Luang Prabang, Laos",
      subTitle: "A UNESCO World Heritage site with Beautiful Temples and French Colonial Architecture",
      visit: "November to February",
      Activities: " Explore the temples, visit the Royal Palace, and enjoy the local cuisine",
      description: "Luang Prabang, a city in Laos, is a hidden gem known for its beautiful temples, French colonial architecture, and vibrant culture. Visitors can explore the Wat Xieng Thong temple, visit the Royal Palace, and enjoy the local cuisine.",
    },
    {
      image: hiddengems2,
      title: " Gili Islands, Indonesia",
      subTitle: "Pristine Beaches, Clear Waters, and a Laid-Back Atmosphere",
      visit: " May to September",
      Activities: "Relax on the beaches, snorkel or dive in the crystal-clear waters, and enjoy the local seafood",
      description: "Gili Islands, a group of islands in Indonesia, is a hidden gem known for its pristine beaches, clear waters, and laid-back atmosphere. Visitors can relax on the beaches, snorkel or dive in the crystal-clear waters, and enjoy the local seafood.",
    },
    {
      image: hiddengems3,
      title: "Phong Nha-Ke Bang National Park, Vietnam",
      subTitle: "Home to some of the World’s Largest Caves",
      visit: " March to August",
      Activities: "Explore the caves, visit the national park, and enjoy the local cuisine",
      description: "Phong Nha-Ke Bang National Park, a national park in Vietnam, is a hidden gem known for its stunning caves, lush forests, and diverse wildlife. Visitors can explore the Son Doong cave, visit the Phong Nha cave, and enjoy the local cuisine",
    },
    {
      image: hiddengems4,
      title: " Bhutan",
      subTitle: "Known for its Monasteries, Fortresses, and Dramatic Landscapes",
      visit: "March to May or September to November",
      Activities: "Explore the monasteries, visit the fortresses, and enjoy the local cuisine",
      description: "Bhutan, a country in the Himalayas, is a hidden gem known for its stunning monasteries, ancient fortresses, and dramatic landscapes. Visitors can explore the Paro Taktsang monastery, visit the Punakha Dzong fortress, and enjoy the local cuisine.",
    },
    {
      image: hiddengems5,
      title: " Tajikistan",
      subTitle: "Offers Rugged Mountains, Ancient Silk Road Sites, and Warm Hospitality",
      visit: "June to September",
      Activities: "Explore the mountains, visit the ancient sites, and enjoy the local cuisine",
      description: "Tajikistan, a country in Central Asia, is a hidden gem known for its rugged mountains, ancient Silk Road sites, and warm hospitality. Visitors can explore the Pamir Mountains, visit the ancient city of Penjikent, and enjoy the local cuisine.",
    },
    {
      image: hiddengems6,
      title: " Sapa, Vietnam",
      subTitle: " Famous for its Terraced Rice Fields and Ethnic Minority Villages",
      visit: "March to May or September to November",
      Activities: "Explore the rice fields, visit the local villages, and enjoy the local cuisine",
      description: "Sapa, a town in Vietnam, is a hidden gem known for its stunning terraced rice fields, ethnic minority villages, and breathtaking landscapes. Visitors can explore the rice fields, visit the local villages, and enjoy the local cuisine.",
    },
  ];



  const NatureEscapes = [
    {
      image: hiddengems1,
      title: "Patagonia, Argentina/Chile",
      subTitle: " Known for its Stunning Glaciers, Mountains, and Hiking Trails",
      visit: "October to March",
      Activities: "Hike in the national park, visit the glacier, and enjoy the local cuisine",
      description: "Patagonia, a region in Argentina and Chile, is a nature lover’s paradise known for its stunning glaciers, mountains, and hiking trails. Visitors can explore the Torres del Paine National Park, visit the Perito Moreno Glacier, and enjoy the local cuisine.",
    },
    {
      image: hiddengems2,
      title: "Banff National Park, Canada",
      subTitle: "Offers Breathtaking Landscapes, Lakes, and Wildlife",
      visit: "June to September",
      Activities: "Explore the lakes, visit the canyons, and enjoy the local cuisine",
      description: "Banff National Park, a national park in Canada, is a nature lover’s paradise known for its breathtaking landscapes, lakes, and diverse wildlife. Visitors can explore the Lake Louise, visit the Johnston Canyon, and enjoy the local cuisine.",
    },
    {
      image: hiddengems3,
      title: "Queenstown, New Zealand:",
      subTitle: "The Adventure Capital with Activities like Bungee Jumping, Skiing, and Hiking",
      visit: "December to February",
      Activities: "Bungee jump, ski, and enjoy the local cuisine",
      description: "Queenstown, a town in New Zealand, is a nature lover’s paradise known for its stunning landscapes, adventure activities, and vibrant culture. Visitors can bungee jump from the Kawarau Bridge, ski in the Coronet Peak, and enjoy the local cuisine.",
    },
    {
      image: hiddengems4,
      title: " Swiss Alps, Switzerland",
      subTitle: "Perfect for Skiing, Hiking, and Enjoying Picturesque Villages",
      visit: "December to April",
      Activities: "Ski, hike, and enjoy the local cuisine",
      description: "Swiss Alps, a mountain range in Switzerland, is a nature lover’s paradise known for its stunning landscapes, picturesque villages, and adventure activities. Visitors can ski in the Jungfraujoch, hike in the Grindelwald, and enjoy the local cuisine.",
    },
    {
      image: hiddengems5,
      title: "Costa Rica",
      subTitle: "Renowned for its Rainforests, Volcanoes, and Biodiversity",
      visit: "December to April",
      Activities: " Explore the rainforests, visit the volcanoes, and enjoy the local cuisine",
      description: "Costa Rica, a country in Central America, is a nature lover’s paradise known for its stunning rainforests, active volcanoes, and diverse wildlife. Visitors can explore the Arenal Volcano, visit the Monteverde Cloud Forest, and enjoy the local cuisine.",
    },
    {
      image: hiddengems6,
      title: "Norwegian Fjords, Norway",
      subTitle: "Offers Dramatic Scenery, Cruises, and Outdoor Activities",
      visit: "June to September",
      Activities: " Take a fjord cruise, hike in the mountains, and enjoy the local cuisine",
      description: "Norwegian Fjords, a region in Norway, is a nature lover’s paradise known for its stunning fjords, dramatic landscapes, and outdoor activities. Visitors can take a fjord cruise, hike in the mountains, and enjoy the local cuisine.",
    },
  ];

  const packages = [
    "Exploring Places in India",
    "All-Time Best Tourist Places",
    "Hidden Gems of Asia",
    "Adventure and Nature Escapes",
  ];


  const [active, setActive] = useState(1);
  const [tours, setTours] = useState(weekendBreakTours);
  const [selectedTour, setSelectedTour] = useState(null);

  const handlePackageChange = (index) => {
    setActive(index + 1);
    setSelectedTour(null); 
    if (index === 0) {
      setTours(weekendBreakTours);
    } else if (index === 1) {
      setTours(packageHolidayTours);
    } else if (index === 2) {
      setTours(HiddenGemsofAsia)
    } else if (index === 3) {
      setTours(NatureEscapes)
    }
  };

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
  };

  const handleBackToTours = () => {
    setSelectedTour(null);
  };

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      {selectedTour ? (
        <div className="tour-detail">
          <img src={selectedTour.image} alt={selectedTour.title} />
          <h3>{selectedTour.title}</h3>
          <p>{selectedTour.description}</p>
          <div className="info">
            <span>visit: {selectedTour.visit}</span>
            <span>Activities: {selectedTour.Activities}</span>
          </div>
          <button onClick={handleBackToTours}>Back to All Tours</button>
        </div>
      ) : (
        <>
          <div className="packages">
            <ul>
              {packages.map((pkg, index) => {
                return (
                  <li
                    className={active === index + 1 ? "active" : ""}
                    onClick={() => handlePackageChange(index)}
                    key={index}
                  >
                    {pkg}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="destinations">
            {tours.map((destination) => {
              return (
                <div className="destination" key={destination.title} onClick={() => handleTourClick(destination)}>
                  <img src={destination.image} alt={destination.title} />
                  <h3>{destination.title}</h3>
                  <p>{destination.subTitle}</p>
                  <div className="info">
                    <h4>{destination.visit}</h4>
                  </div>
                  <div className="distance">
                    <span>{destination.Activities}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        border-radius: 1rem;
      }
      .info {
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .tour-detail {
    text-align: center;
    img {
      width: 50%;
      margin-bottom: 1rem;
    }
    .info {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    button {
      margin-top: 2rem;
      padding: 0.5rem 2rem;
      background-color: #8338ec;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;

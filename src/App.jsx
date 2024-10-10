import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import ReviewsAndForm from "./components/ReviewsAndForm";  // Import the combined reviews and form component
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(`
      nav,
      #hero,
      #services,
      #recommend,
      #reviews-and-form,
      footer
    `, {
      opacity: 0,
      interval: 300,
    });
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <div id="testimonials">
        <ReviewsAndForm />
      </div> 
      <Footer />
    </div>
  );
}

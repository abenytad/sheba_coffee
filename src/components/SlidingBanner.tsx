"use client";
import React, { useState, useEffect } from "react";

// Text array for the sliding banner
const texts = [
  "Welcome to our website - Sheba Coffee.",
  "The Queen’s brew from the heart of Ethiopia.",
  "Freshly roasted Ethiopian coffee beans delivered to your door.",
  "Experience the rich flavors of Sheba Coffee — The Queen's brew.",
  "Ethically sourced and roasted to perfection in the heart of Ethiopia.",
  "Experience the Essence of Ethiopian Coffee Culture.",
  "Crafted for Coffee Lovers, Inspired by Tradition.",
  "Sheba Coffee: A Journey to Richness in Every Cup.",
  "Brewed from Tradition, Enjoyed Worldwide.",
  
];

export default function SlidingBanner() {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true); // For controlling fade effect
  const [isVisible, setIsVisible] = useState(true); // To hide/show banner on scroll

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fading out the current text before switching
      setFade(false);

      // Wait for the fade-out transition to complete, then switch the text
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setFade(true); // Fade in the new text
      }, 500); // Half of the 1s duration to allow the fade-out effect
    }, 5000); // The main interval for changing texts

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50); // Hide banner when scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? (
    <div className="bg-black text-white py-2"> {/* Reduced height with py-2 */}
      <div className="container mx-auto text-center">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`text-xs md:text-sm font-medium transition-opacity duration-1000 ease-in-out ${
              index === currentText && fade ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: index === currentText ? "relative" : "absolute",
              zIndex: index === currentText ? 1 : 0, // Ensure the current text is always on top
              transition: "opacity 0.5s ease-in-out" // Transition effect for smooth fade
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

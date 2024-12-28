import React, { useState, useRef } from "react";
import arrow from "../assets/images/arrow.png";

const AnimatedButton = ({ text, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScFbhtzofQXprEY2_PQR5ImdAcd5nXa0AOifWMqyOfPJdwxwQ/viewform?usp=header"
      target="_blank"
      className={`animate-btn p-5 rounded-full primary-bg flex items-center justify-center relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`
          text-[1.4rem] 
          font-medium 
          text-white
          transition-transform 
          duration-300
          ${isHovered ? "-translate-x-8" : "translate-x-0"}
        `}
      >
        {text}
      </span>
      <span
        className={`
          bg-white 
          size-[3.8rem] 
          rounded-full 
          flex 
          items-center 
          justify-center
          absolute
          transition-all
          duration-300
          ${
            isHovered ? "opacity-100 translate-x-24" : "opacity-0 translate-x-0"
          }
        `}
      >
        <img src={arrow} alt="" />
      </span>
    </a>
  );
};

export default AnimatedButton;

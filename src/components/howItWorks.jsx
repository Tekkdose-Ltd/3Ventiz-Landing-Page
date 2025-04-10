import React from "react";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";

export default function HowItWorks() {
  return (
    <div className="primary-darkbg">
      <div className="Container">
        <div className="grid gap-4 max-w-[34.6rem] w-full">
          <p
            data-aos="fade-up"
            style={{ color: "rgba(173, 172, 218, 1)" }}
            className="text-[1.4rem] leading-[1.8rem]"
          >
            HOW IT WORKS
          </p>
          <p
            data-aos="fade-up"
            className="text-[2.8rem] strong leading-[3.4rem] font-medium text-white"
          >
            Plan Your Event in Just a Few Steps
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-2 gap-8 mt-8">
          <StepsCard
            num={one}
            title={"Search & Filter"}
            text={
              "Use our smart filters to find vendors that meet your budget and style."
            }
          />
          <StepsCard
            num={two}
            title={"Compare & Connect"}
            text={
              "View detailed profiles and chat directly with vendors to finalize your plans."
            }
          />
          <StepsCard
            num={three}
            title={"Book & Pay"}
            text={"Book the services you need with secure payment options."}
          />
          <StepsCard
            num={four}
            title={"Plan & Celebrate"}
            text={
              "Stay organized with our planning tools and enjoy a stress-free event."
            }
          />
        </div>
      </div>
    </div>
  );
}

const StepsCard = ({ text, title, num }) => {
  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      className="p-12 rounded-[2rem]"
    >
      <img src={num} alt=""  data-aos="fade-up"/>
      <div className=" grid gap-4 md+:mt-[-1rem]">
        <p
          data-aos="fade-up"
          className="text-[2rem] strong leading-[2.8rem] font-medium text-white"
        >
          {title}
        </p>
        <p
          data-aos="fade-up"
          className="text-[1.4rem] leading-[2rem] text-white md+:max-w-[35rem] w-full"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

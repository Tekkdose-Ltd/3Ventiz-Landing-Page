import React from "react";

export default function HowItWorks() {
  return (
    <div className="primary-darkbg py-20">
      <div className="Container">
        <div className="grid gap-4 max-w-[346px] w-full">
          <p
            style={{ color: "rgba(173, 172, 218, 1)" }}
            className="text-[1.4rem] leading-[1.8rem]"
          >
            HOW IT WORKS
          </p>
          <p className="text-[2.8rem] leading-[3.4rem] font-medium text-white">
            Plan Your Event in Just a Few Steps
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <StepsCard
            num={1}
            title={"Search & Filter"}
            text={
              "Use our smart filters to find vendors that meet your budget and style."
            }
          />
          <StepsCard
            num={2}
            title={"Compare & Connect"}
            text={
              "View detailed profiles and chat directly with vendors to finalize your plans."
            }
          />
          <StepsCard
            num={3}
            title={"Book & Pay"}
            text={
              "Book the services you need with secure payment options."
            }
          />
          <StepsCard
            num={4}
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
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    }}
    className="p-8 rounded-[2rem] grid gap-4"
   >
      <p className="text-[14rem] leading-[15.6rem] font-bold text-white opacity-[0.1]">
        {num}
      </p>
      <p className="text-[2rem] leading-[2.8rem] font-medium text-white">
        {title}
      </p>
      <p className="text-[1.4rem] leading-[2rem] text-white max-w-[35rem] w-full">{text}</p>
    </div>
  );
};
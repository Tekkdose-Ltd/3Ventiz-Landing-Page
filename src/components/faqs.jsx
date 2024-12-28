import React from "react";
import Accordion from "./accordion";


export default function Faqs() {
  return (
    <div className="Container py-16 grid gap-12">
      <div className="grid gap-8">
        <p data-aos="fade-up" className="primary-color text-[1.4rem] leading-[1.8rem] text-left">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <div data-aos="fade-up" className="text-left grid gap-4 ">
          <p data-aos="fade-up" className="text-[2.8rem] strong font-medium leading-[3.4rem] max-w-[450px] w-full ">
            Got Questions? We’ve Got Answers.
          </p>
          <p data-aos="fade-up" className="text-[1.4rem] leading-[2rem] text-color max-w-[400px] ">
            Find quick solutions and clear explanations for everything you need
            to know about 3ventiz
          </p>
        </div>
      </div>
      <Accordion />
    </div>
  );
}

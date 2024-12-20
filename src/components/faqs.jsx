import React from "react";
import plus from "../assets/images/Plus.png"

export default function Faqs() {
  return (
    <div className="Container py-16 grid gap-12">
      <div className="grid gap-8">
        <p className="primary-color text-[1.4rem] leading-[1.8rem] text-left">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <div className="text-left grid gap-4 ">
          <p className="text-[2.8rem] font-medium leading-[3.4rem] max-w-[450px] w-full ">
            Got Questions? We’ve Got Answers.
          </p>
          <p className="text-[1.4rem] leading-[2rem] text-color max-w-[400px] ">
            Find quick solutions and clear explanations for everything you need
            to know about 3ventiz
          </p>
        </div>
      </div>
      <div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1"  />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Accordion = ({}) => {
  return <div></div>;
};

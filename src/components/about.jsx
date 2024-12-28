import React from "react";
import ticket from "../assets/images/ticket creation.png";
import tracking from "../assets/images/tracking.png";
import delivery from "../assets/images/delivery.png";
import management from "../assets/images/management.png";
import vendor from "../assets/images/vendor icon.png";
import pricing from "../assets/images/Pricing Icon.png";
import communication from "../assets/images/communication.png";
import secure from "../assets/images/secure.png";
import event from "../assets/images/event.png";
import reviews from "../assets/images/reviews.png";
import ticketline from "../assets/images/ticketline.png";
import smline1 from "../assets/images/smline1.png";
import smline2 from "../assets/images/smline2.png";

export default function About() {
  return (
    <div className="Container py-16 grid gap-8">
      <p data-aos="fade-up" className="primary-color text-[1.4rem] text-left">ABOUT US</p>
      <div className="text-left grid gap-4 ">
        <p data-aos="fade-up" className="text-[2.8rem] strong font-medium leading-[34px] max-w-[450px] w-full ">
          We are redefining the digital space of event planning
        </p>
        <p data-aos="fade-up" className="text-[1.4rem] leading-[20px] text-color max-w-[400px] ">
          At 3ventiz, we bridge the gap between hosts and vendors, making event
          planning simple, transparent, and stress-free
        </p>
      </div>
      <div
        style={{ backgroundColor: "rgba(245, 245, 250, 1)" }}
        className="p-12 px-4 md:px-20 rounded-[2rem]"
      >
        <div className="text-center grid gap-4">
          <p data-aos="fade-up" className="text-[1.4rem] leading-[18px] primary-color ">
            WHAT MAKES US DIFFERENT?
          </p>
          <p data-aos="fade-up" className="text-[2.8rem] strong font-medium leading-[34px] w-full ">
            Streamlining {" "}
            <span className="relative hidden sm:inline">
              <img
                src={ticketline}
                alt=""
                className="absolute left-10 w-full"
              />
              event ticketing
            </span>{" "}
            <span className="relative inline sm:hidden">
              <img
                src={smline1}
                alt=""
                className="absolute left-0 w-full"
              />
              event 
            </span>{" "}
            <span className="relative inline sm:hidden">
              <img
                src={smline2}
                alt=""
                className="absolute left-0 top-0 h-[5px] w-full"
              />
               ticketing
            </span>{" "}
            like never before
          </p>
          <p data-aos="fade-up" className="text-[1.4rem] leading-[20px] mx-auto text-color max-w-[400px] w-full ">
            Create, sell, and manage event tickets effortlessly with our
            all-in-one platform. Track real-time sales and attendee information
            to ensure a successful event.
          </p>
        </div>
        <div className="pt-20 grid md:grid-cols-2 gap-8 md:gap-20">
          <AboutCard
            text=" Set up and sell tickets quickly with easy tools to customize
          pricing, availability, and ticket types."
            title="Effortless Ticket Creation"
            img={ticket}
          />
          <AboutCard
            text="Set up and sell tickets quickly with easy tools to customize pricing, availability, and ticket types."
            title="Easy Payment & Tracking"
            img={tracking}
          />
          <AboutCard
            text="Sell tickets quickly with tools to customize pricing and availability."
            title="Instant Ticket Delivery"
            img={delivery}
          />
          <AboutCard
            text="Manage guest lists with tools to track attendance and check-in guests."
            title="Attendee Management"
            img={management}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          text="Find the perfect vendors with our easy-to-use search and budget-matching filters."
          title="Discover Vendors"
          img={vendor}
        />
        <FeatureCard
          text="No surprises—compare vendor prices, reviews, and ratings all in one place."
          title="Transparent Pricing"
          img={pricing}
        />
        <FeatureCard
          text="Chat directly with vendors to customize your event and get answers fast."
          title="Direct Communication"
          img={communication}
        />
        <FeatureCard
          text="Enjoy secure payments, robust data protection, and trusted vendor profiles."
          title="Secure and Reliable"
          img={secure}
        />
        <FeatureCard
          text="Sell tickets and manage attendance effortlessly through 3ventiz."
          title="Event Ticketing"
          img={event}
        />
        <FeatureCard
          text="Choose trusted vendors with detailed reviews and ratings from clients."
          title="Reviews and Ratings"
          img={reviews}
        />
      </div>
    </div>
  );
}

const AboutCard = ({ text, title, img }) => {
  return (
    <div data-aos="fade-up" className="flex gap-8 items-center just">
      <img data-aos="fade-up" src={img} alt="about card logo" className="w-[80px]" />
      <div className="text-left">
        <p  data-aos="fade-up"className="font-medium strong text-[2rem] leading-[28px] text-color">
          {title}
        </p>

        <p data-aos="fade-up"
          className="text-[1.4rem] leading-[20px] "
          style={{ color: "rgba(125, 125, 122, 1)" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({ text, title, img }) => {
  return (
    <div data-aos="fade-down" className="grid gap-4 text-left">
      <img  style={{ borderColor: "rgba(34, 31, 203, .1)" }} data-aos="fade-down" src={img} alt="about card logo" className="size-16 border-b-2 rounded-[8px]" />
      <p data-aos="fade-down" className="font-medium strong text-[2rem] leading-[28px] text-color">
        {title}
      </p>
      <p data-aos="fade-down"
        className="text-[1.4rem] leading-[20px] "
        style={{ color: "rgba(125, 125, 122, 1)" }}
      >
        {text}
      </p>
    </div>
  );
};

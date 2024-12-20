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

export default function About() {
  return (
    <div className="Container py-16 grid gap-8">
      <p className="primary-color text-[1.4rem] text-left">ABOUT US</p>
      <div className="text-left grid gap-4 ">
        <p className="text-[2.8rem] font-medium leading-[34px] max-w-[450px] w-full ">
          We are redefining the digital space of event planning
        </p>
        <p className="text-[1.4rem] leading-[20px] text-color max-w-[400px] ">
          At 3ventiz, we bridge the gap between hosts and vendors, making event
          planning simple, transparent, and stress-free
        </p>
      </div>
      <div
        style={{ backgroundColor: "rgba(245, 245, 250, 1)" }}
        className="p-12 px-4 md:px-20"
      >
        <div className="text-center grid gap-4">
          <p className="text-[1.4rem] leading-[18px] primary-color ">
            WHAT MAKES US DIFFERENT?
          </p>
          <p className="text-[2.8rem] font-medium leading-[34px] w-full ">
            Streamlining event ticketing like never before
          </p>
          <p className="text-[1.4rem] leading-[20px] mx-auto text-color max-w-[400px] w-full ">
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
    <div className="flex gap-8 items-center just">
      <img src={img} alt="about card logo" className="w-[80px]" />
      <div className="text-left">
        <p className="font-medium text-[2rem] leading-[28px] text-color">
          {title}
        </p>

        <p
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
    <div className="grid gap-4 text-left">
      <img src={img} alt="about card logo" className="size-16" />
      <p className="font-medium text-[2rem] leading-[28px] text-color">
        {title}
      </p>
      <p
        className="text-[1.4rem] leading-[20px] "
        style={{ color: "rgba(125, 125, 122, 1)" }}
      >
        {text}
      </p>
    </div>
  );
};

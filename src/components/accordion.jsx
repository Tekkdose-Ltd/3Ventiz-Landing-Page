import React, { useState } from "react";
import plus from "../assets/images/Plus.png";
import minus from "../assets/images/minus.png";

export default function Accordion() {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How does 3ventiz help me plan my event?",
      data: `3ventiz connects you with reliable vendors, offers budget-matching tools, and provides planning features like checklists and reminders to ensure a smooth and stress-free event planning experience.3ventiz connects you with reliable vendors, offers budget-matching tools, and provides planning features like checklists and reminders to ensure a smooth and stress-free event planning experience.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "Is it safe to make payments through 3ventiz?",
      data: `Yes, all transactions are securely processed using trusted payment gateways, ensuring your data and payments are protected.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "Can I communicate directly with vendors?",
      data: `Absolutely! Our built-in messaging feature allows you to chat with vendors, discuss details, and ask questions before booking.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "How do I know the vendors are reliable?",
      data: `Every vendor on 3ventiz has verified profiles, reviews, and ratings from past clients to help you make informed decisions.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "Can I sell tickets for my event on 3ventiz?",
      data: `Yes! You can easily create, manage, and sell tickets for your events using our secure ticketing system, similar to Eventbrite.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "How do I sign up as a vendor on 3ventiz?",
      data: `Vendors can sign up by creating a profile, uploading their portfolio, and setting their services and pricing. Once verified, they can start receiving bookings.`,
      isOpen: false,
    },
    {
      key: 7,
      title: "What types of events can I plan using 3ventiz?",
      data: `3ventiz supports all kinds of events, including weddings, corporate meetings, birthdays, concerts, and private gatherings—big or small, we've got you covered.`,
      isOpen: false,
    },
    {
      key: 8,
      title: "Is there a cost to join 3ventiz as a client or vendor?",
      data: `Signing up as a client is completely free. Vendors can also join for free, with premium options available to boost visibility and reach more customers.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div data-aos="fade-up" style={{backgroundColor:"rgba(244, 247, 247, 1)"}} className="border rounded-[1.2rem] p-2">
      {accordions.map((accordion) => (
        <AccordionComp
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
    </div>
  );
}

function AccordionComp(props) {
  return (
    <div  className="rounded-[1.2rem] overflow-hidden">
      <button
        className={`w-full p-4 text-left ${props.isOpen?"bg-white":"bg-transparent"}
         transition duration-300 flex items-center gap-8 `}
        onClick={props.toggleAccordion}
      >
        <img src={props.isOpen?minus:plus} alt="" />
        <p className="font-medium text-[1.6rem] leading-[2.4rem] align-bottom ">
          {props.title}{" "}
        </p>
        {/* <span className={`float-right transform ${props.isOpen ?  
                                 'rotate-180' : 'rotate-0'}  
                                 transition-transform duration-300`}> 
                    &#9660; 
                </span>  */}
      </button>
      {props.isOpen && <p className="p-4 bg-white text-[1.4rem] leading-[2rem] ">{props.data}</p>}
    </div>
  );
}

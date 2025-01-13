import React from "react";
import caterers from "../assets/images/caterers.png";
import wedding from "../assets/images/wedding.png";
import musician from "../assets/images/musician.png";
import photographers from "../assets/images/photographers.png";
import decorators from "../assets/images/decorators.png";
import makeup from "../assets/images/makeup.png";
import dj from "../assets/images/disc joker.png";
import concerts from "../assets/images/concerts.png";
import birthday from "../assets/images/birthday.png";
import events from "../assets/images/events.png";
import babyshower from "../assets/images/babyshower.png";
import caterersxs from "../assets/images/caterersxs.png";
import weddingxs from "../assets/images/weddingxs.png";
import musicianxs from "../assets/images/musicianxs.png";
import photographersxs from "../assets/images/photographersxs.png";
import decoratorsxs from "../assets/images/decoratorsxs.png";
import makeupxs from "../assets/images/makeupxs.png";
import djxs from "../assets/images/disc jokerxs.png";
import concertsxs from "../assets/images/concertsxs.png";
import birthdayxs from "../assets/images/birthdayxs.png";
import eventsxs from "../assets/images/eventsxs.png";
import babyshowerxs from "../assets/images/babyshowerxs.png";
import Carousel from "./carousel";
import AnimatedButton from "./button";

const vendorSlide = [caterers, makeup, decorators,photographers,dj, musician];
const clientSlide = [wedding, concerts, babyshower, events, birthday];
const vendorSlidexs = [caterersxs, makeupxs, decoratorsxs,photographersxs,djxs, musicianxs];
const clientSlidexs = [weddingxs, concertsxs, babyshowerxs, eventsxs, birthdayxs];

export default function UserSection() {
  return (
    <div className="Container py-16 grid gap-12">
      <div data-aos="fade-up" className="grid gap-8">
        <p
          data-aos="fade-up"
          className="primary-color text-[1.4rem] leading-[1.8rem] text-left"
        >
          TARGET AUDIENCE
        </p>
        <div className="text-left grid gap-4 ">
          <p
            data-aos="fade-up"
            className="text-[2.8rem] strong font-medium leading-[3.4rem] max-w-[450px] w-full "
          >
            Who is 3ventiz For?
          </p>
          <p
            data-aos="fade-up"
            className="text-[1.4rem] leading-[2rem] text-color md+:max-w-[400px] "
          >
            3ventiz connects event planners with trusted vendors, making
            planning seamless and business growth effortless
          </p>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="grid md+:grid-cols-[32rem_1fr] gap-10  md+:h-[400px]">
          <div
           // style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] flex flex-col gap-8 items-start"
          >
            <div className="grid gap-6">
              <p
                data-aos="fade-up"
                className="italic text-[3.2rem] strong leading-[4rem] font-medium"
              >
                For Vendors
              </p>
              <p
                data-aos="fade-up"
                style={{ color: "rgba(2, 1, 29, 1)" }}
                className="text-[1.4rem] leading-[2rem] md+:max-w-[27rem] "
              >
                Showcase your services, connect with more clients, and manage
                bookings effortlessly. 3ventiz is your partner for business
                growth.
              </p>
            </div>
            <div data-aos="fade-up">
              <AnimatedButton
                text="Join as a Vendor"
                className={"!w-[171px]"}
                href={"https://docs.google.com/forms/d/e/1FAIpQLScFbhtzofQXprEY2_PQR5ImdAcd5nXa0AOifWMqyOfPJdwxwQ/viewform?usp=dialog"}
              />
            </div>
          </div>
          <div className="overflow-hidden hidden xs:block rounded-[1.6rem] h-[40rem] w-full">
            <Carousel slides={vendorSlide} />
          </div>
          <div className="overflow-hidden block xs:hidden rounded-[1.6rem] h-[40rem] w-full">
            <Carousel slides={vendorSlidexs} />
          </div>
        </div>
        <div className="grid md+:grid-cols-[1fr_32rem] gap-10  md+:h-[400px]">
          <div
           // style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] md+:order-2 flex flex-col gap-8 items-start"
          >
            <div className="grid gap-6">
              <p
                data-aos="fade-up"
                className="italic text-[3.2rem] strong leading-[4rem] font-medium"
              >
                For Clients (Event Hosts & Planners)
              </p>
              <p
                data-aos="fade-up"
                style={{ color: "rgba(2, 1, 29, 1)" }}
                className="text-[1.4rem] leading-[2rem]  md+:max-w-[27rem] "
              >
                Whether you’re planning a wedding, birthday, corporate event, or
                baby shower, 3ventiz helps you find trusted vendors, stay within
                budget, and plan with ease.
              </p>
            </div>
            <div data-aos="fade-up">
              <AnimatedButton
                text="Join as a Client"
                className={"!w-[171px]"}
                href={"https://docs.google.com/forms/d/e/1FAIpQLSeHdbLncolg-BWRYn6HcRssV8vX9ENxkQBMLZ0mofpix9VHTA/viewform?usp=header"}
              />
            </div>
          </div>
          <div className="overflow-hidden hidden xs:block md+:order-1 h-[40rem] w-full rounded-[1.6rem]">
            <Carousel slides={clientSlide} />
          </div>
          <div className="overflow-hidden block xs:hidden md+:order-1 h-[40rem] w-full rounded-[1.6rem]">
            <Carousel slides={clientSlidexs} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import caterers from "../assets/images/caterers.png";
import caterersmd from "../assets/images/caterersmd.png";
import weddings from "../assets/images/weddings.png";
import musician from "../assets/images/musician.png";
import musicianmd from "../assets/images/musicianmd.png";
import photographers from "../assets/images/photographers.png";
import photographersmd from "../assets/images/photographersmd.png";
import decorators from "../assets/images/decorators.png";
import decoratorsmd from "../assets/images/decoratorsmd.png";
import makeup from "../assets/images/makeup.png";
import makeupmd from "../assets/images/makeupmd.png";
import dj from "../assets/images/disc joker.png";
import djmd from "../assets/images/disc jokermd.png";
import concerts from "../assets/images/concerts.png";
import birthday from "../assets/images/birthday.png";
import events from "../assets/images/events.png";
import babyshower from "../assets/images/babyshower.png";
import caterersxs from "../assets/images/caterersxs.png";
import weddingsxs from "../assets/images/weddingsxs.png";
import weddingsmd from "../assets/images/weddingsmd.png";
import musicianxs from "../assets/images/musicianxs.png";
import photographersxs from "../assets/images/photographersxs.png";
import decoratorsxs from "../assets/images/decoratorsxs.png";
import makeupxs from "../assets/images/makeupxs.png";
import djxs from "../assets/images/disc jokerxs.png";
import concertsxs from "../assets/images/concertsxs.png";
import birthdayxs from "../assets/images/birthdayxs.png";
import eventsxs from "../assets/images/eventsxs.png";
import babyshowerxs from "../assets/images/babyshowerxs.png";
import concertsmd from "../assets/images/concertsmd.png";
import birthdaymd from "../assets/images/birthdaymd.png";
import eventsmd from "../assets/images/eventsmd.png";
import babyshowermd from "../assets/images/babyshowermd.png";
import Carousel from "./carousel";
import AnimatedButton from "./button";

const vendorSlide = [
  { image: caterers, title: "Caterers" },
  { image: makeup, title: "Makeup Artists" },
  { image: decorators, title: "Event Decorators" },
  { image: photographers, title: "Photographers" },
  { image: dj, title: "Disc Jockeys (DJ)" },
  { image: musician, title: "Live Band" },
];
const vendorSlidemd = [
  { image: caterersmd, title: "Caterers" },
  { image: makeupmd, title: "Makeup Artists" },
  { image: decoratorsmd, title: "Event Decorators" },
  { image: photographersmd, title: "Photographers" },
  { image: djmd, title: "Disc Jockeys (DJ)" },
  { image: musicianmd, title: "Live Band" },
];

const vendorSlidexs = [
  { image: caterersxs, title: "Caterers" },
  { image: makeupxs, title: "Makeup Artists" },
  { image: decoratorsxs, title: "Event Decorators" },
  { image: photographersxs, title: "Photographers" },
  { image: djxs, title: "Disc Jockeys (DJ)" },
  { image: musicianxs, title: "Live Band" },
];
const clientSlide = [
  { image: weddings, title: "Weddings" },
  { image: events, title: "Corporate Events" },
  { image: concerts, title: "Concerts" },
  { image: birthday, title: "Birthdays" },
  { image: babyshower, title: "Baby Showers" },
];

const clientSlidexs = [
  { image: weddingsxs, title: "Weddings" },
  { image: eventsxs, title: "Corporate Events" },
  { image: concertsxs, title: "Concerts" },
  { image: birthdayxs, title: "Birthdays" },
  { image: babyshowerxs, title: "Baby Showers" },
];
const clientSlidemd = [
  { image: weddingsmd, title: "Weddings" },
  { image: eventsmd, title: "Corporate Events" },
  { image: concertsmd, title: "Concerts" },
  { image: birthdaymd, title: "Birthdays" },
  { image: babyshowermd, title: "Baby Showers" },
];

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
      <div className="grid gap-16">
        <div className="grid xl:grid-cols-[1fr_68rem] gap-16  xl:h-[400px]">
          <div
            // style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] flex flex-col gap-8 items-start"
          >
            <div className="grid gap-4">
              <p
                data-aos="fade-up"
                className="italic text-[3.2rem] strong leading-[4rem] font-medium"
              >
                For Vendors
              </p>
              <p
                data-aos="fade-up"
                style={{ color: "rgba(2, 1, 29, 1)" }}
                className="text-[1.4rem] leading-[2rem] font-light "
              >
                Showcase your services, connect with more clients, and manage
                bookings effortlessly. 3ventiz is your partner for business
                growth.
              </p>
              <div data-aos="fade-up">
                <AnimatedButton
                  text="Join as a Vendor"
                  className={"!w-[171px]"}
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLScFbhtzofQXprEY2_PQR5ImdAcd5nXa0AOifWMqyOfPJdwxwQ/viewform?usp=dialog"
                  }
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden hidden xsm:block rounded-[1.6rem] h-[40rem] md+:max-w-[73rem] w-full">
            <Carousel slides={vendorSlide} />
          </div>
          <div className="overflow-hidden hidden xs:block xsm:hidden rounded-[1.6rem] h-[40rem] md+:max-w-[73rem] w-full">
            <Carousel slides={vendorSlidemd} />
          </div>
          <div className="overflow-hidden block xs:hidden rounded-[1.6rem] h-[40rem] w-full">
            <Carousel slides={vendorSlidexs} />
          </div>
        </div>
        <div className="grid xl:grid-cols-[68rem_1fr] gap-16  xl:h-[400px]">
          <div
            // style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] xl:order-2 flex flex-col gap-8 items-start"
          >
            <div className="grid gap-4">
              <p
                data-aos="fade-up"
                className="italic text-[3.2rem] strong leading-[4rem] font-medium"
              >
                For Clients (Event Hosts & Planners)
              </p>
              <p
                data-aos="fade-up"
                style={{ color: "rgba(2, 1, 29, 1)" }}
                className="text-[1.4rem] leading-[2rem] font-light "
              >
                Whether you’re planning a wedding, birthday, corporate event, or
                baby shower, 3ventiz helps you find trusted vendors, stay within
                budget, and plan with ease.
              </p>
              <div data-aos="fade-up">
                <AnimatedButton
                  text="Join as a Client"
                  className={"!w-[171px]"}
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSeHdbLncolg-BWRYn6HcRssV8vX9ENxkQBMLZ0mofpix9VHTA/viewform?usp=header"
                  }
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden hidden xsm:block rounded-[1.6rem] h-[40rem] md+:max-w-[73rem] w-full">
            <Carousel slides={clientSlide} />
          </div>
          <div className="overflow-hidden hidden xs:block xsm:hidden rounded-[1.6rem] h-[40rem] md+:max-w-[73rem] w-full">
            <Carousel slides={clientSlidemd} />
          </div>
          <div className="overflow-hidden block xs:hidden rounded-[1.6rem] h-[40rem] w-full">
            <Carousel slides={clientSlidexs} />
          </div>
        </div>
      </div>
    </div>
  );
}

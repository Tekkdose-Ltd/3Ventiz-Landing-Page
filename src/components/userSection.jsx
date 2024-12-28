import React from "react";
import caterers from "../assets/images/caterers.png";
import wedding from "../assets/images/wedding.png";
import musician from "../assets/images/musician.png";
import photographers from "../assets/images/photographers.png";
import decorators from "../assets/images/decorators.png";
import makeup from "../assets/images/makeup.png";
import concerts from "../assets/images/concerts.png";
import birthday from "../assets/images/birthday.png";
import events from "../assets/images/events.png";
import babyshower from "../assets/images/babyshower.png";
import Carousel from "./carousel";
import AnimatedButton from "./button";

const vendorSlide = [caterers, photographers, decorators, musician, makeup];
const clientSlide = [wedding, concerts, babyshower, events, birthday];

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
            className="text-[1.4rem] leading-[2rem] text-color max-w-[400px] "
          >
            3ventiz connects event planners with trusted vendors, making
            planning seamless and business growth effortless
          </p>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid md:grid-cols-[32rem_1fr] gap-8  md:h-[400px]">
          <div
            style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] p-8 flex flex-col gap-8 justify-between items-start"
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
                className="text-[1.4rem] leading-[2rem]  max-w-[27rem] "
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
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] h-[23.4rem] sm:h-[40rem] w-full">
            <Carousel slides={vendorSlide} />
          </div>
        </div>
        <div className="grid md:grid-cols-[1fr_32rem] gap-8  md:h-[400px]">
          <div
            style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] md:order-2 p-8 flex flex-col gap-8 justify-between items-start"
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
                className="text-[1.4rem] leading-[2rem]  max-w-[27rem] "
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
              />
            </div>
          </div>
          <div className="overflow-hidden sm:order-1 h-[23.4rem] sm:h-[40rem] w-full rounded-[1.6rem]">
            {/* <img src={wedding} alt="vendor image" className="" /> */}
            <Carousel slides={clientSlide} />
          </div>
        </div>
      </div>
    </div>
  );
}

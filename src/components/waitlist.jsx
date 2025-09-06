import { XMarkIcon } from "@heroicons/react/24/outline";
import VentisLogo from "./3ventis";
import vendors from "../assets/images/vendors.png";
import client from "../assets/images/client.png";
import { useState } from "react";
import { hydrateRoot } from "react-dom/client";

const Links = [
  {
    title: "Join as a Vendor",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScFbhtzofQXprEY2_PQR5ImdAcd5nXa0AOifWMqyOfPJdwxwQ/viewform?usp=dialog",
    img: vendors,
  },
  {
    title: "Join as a Client",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeHdbLncolg-BWRYn6HcRssV8vX9ENxkQBMLZ0mofpix9VHTA/viewform?usp=header",
    img: client,
  },
];

export default function Waitlist({ close }) {
  const [linkHref, setLinkHref] = useState("");
  return (
    <>
      <div className="fixed w-full bg-[#ffffff50] z-[10000] backdrop-blur-[.5rem] bottom-0 left-0 right-0 top-0 h-full">
        <div
          style={{ backgroundColor: "white" }}
          className=" shadow-2xl max-w-[45.2rem] backdrop-blur-[5px] z-[1000000] w-full mx-auto abscenter rounded-[2rem] p-[2.4rem] px-[4rem]"
        >
          <div className="grid items-center justify-center gap-12 text-center">
            <span className="grid items-center justify-center ">
              <VentisLogo />
            </span>
            <div>
              <p className="font-medium strong text-[3.2rem] leading-[4rem] text-color">
                Become one of our first users to join 3ventiz!
              </p>
              <p
                className="text-[1.4rem] leading-[2rem] max-w-[32rem] w-full mx-auto "
                style={{ color: "rgba(125, 125, 122, 1)" }}
              >
                Gain early access to our event planning tools, exclusive vendor
                list and booking features.
              </p>
            </div>
            <div className="grid gap-3">
              <p className="font-medium text-[1.4rem] leading-[1.8rem] text-black">
                Please select:
              </p>
              <div className=" flex items-center mx-auto gap-4">
                {Links.map((link) => {
                  return (
                    <button
                    key={link.title}
                      onClick={() => setLinkHref(link.href)}
                      style={{
                        backgroundColor: `${
                          link.href === linkHref
                            ? "rgba(34, 31, 203, 1)"
                            : "rgba(248, 248, 248, 1)"
                        }`,
                      }}
                      className="flex transition-all items-center gap-4 p-[.8rem] pr-[1.2rem] rounded-[1.2rem]"
                    >
                      <img src={link.img} alt="Vendor icon" />
                      <span
                        className={`font-medium transition-all text-[1.4rem] leading-[1.8rem]  ${
                          link.href === linkHref ? "text-white" : "text-black"
                        }`}
                      >
                        {link.title}
                      </span>
                    </button>
                  );
                })}
              </div>
              <a
                style={{
                  backgroundColor: `${
                    linkHref ? "rgba(34, 31, 203, 1)" : "rgba(175, 176, 175, 1)"
                  }`,
                }}
                href={linkHref}
                target="_blank"
                className="rounded-[1.2rem] cursor-pointer transition-all p-[1.4rem] px-[2rem] text-center strong font-medium text-[1.4rem] leading-[1.8rem] text-white"
              >
                Continue
              </a>
            </div>
          </div>
          <span
            onClick={close}
            className="absolute top-8 right-8 cursor-pointer"
          >
            <XMarkIcon aria-hidden="true" className="size-10 " color="black" />
          </span>
        </div>
      </div>
    </>
  );
}

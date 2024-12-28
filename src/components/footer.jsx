import React from "react";
import VentisLogo from "./3ventis";
import footer from "../assets/images/footer logo.png";
import linkedin from "../assets/images/linkedin.png";
import x from "../assets/images/x.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

const navigation = [
  { name: "About us", href: "about-us" },
  { name: "How It Works", href: "how-it-works" },
  { name: "Our users", href: "our-users" },
  { name: "FAQs", href: "faqs" },
];

export default function Footer() {
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-white p-8">
      <div className="rounded-[2rem] primary-darkbg p-8">
        <div className="grid md:grid-cols-[350px_1fr] gap-8 md:gap-32">
          <div className="text-left grid gap-8">
            <VentisLogo clr="white" />

            <p
              data-aos="fade-up"
              className="text-[1.4rem] leading-[20px] max-w-[290px] w-full text-white "
            >
              3ventiz transforms the way we connect, collaborate, and create
              unforgettable experiences, simplifying every step of event
              planning and management.
            </p>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
              data-aos="fade-up"
              className="flex items-center gap-2 sm:gap-4 justify-between mt-4 max-w-[350px] w-full rounded-[1rem] p-2 pl-4 border "
            >
              <input
                type="email"
                name="email"
                id=""
                className="flex-1 text-[1.4rem] outline-none text-gray-400 bg-transparent"
                placeholder="Enter email address"
              />
              <button className="bg-white primary-color font-semibold text-[1.2rem] sm:text-[1.4rem] px-4 sm:px-[1.8rem] py-3 sm:py-6 rounded-[6px] ">
                Join waitlist
              </button>
            </div>

            <ul data-aos="fade-up" className="mt-8 flex items-center gap-6">
              <li>
                <a href="https://www.linkedin.com/company/106094219/admin/dashboard/" rel="noreferrer" target="_blank" className="">
                  <img src={linkedin} alt="footer logo" className="" />
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/" rel="noreferrer" target="_blank" className="">
                  <span className="sr-only">Facebook</span>
                  <img src={facebook} alt="footer logo" className="" />
                </a>
              </li>

             

              <li>
                <a href="#" rel="noreferrer" target="_blank" className="">
                  <span className="sr-only">Twitter</span>

                  <img src={x} alt="footer logo" className="" />
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer" target="_blank" className="">
                  <span className="sr-only">Instagram</span>
                  <img src={instagram} alt="footer logo" className="" />
                </a>
              </li>
          
            </ul>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p
                data-aos="fade-up"
                className="font-medium text-[1.6rem] leading-[28px] opacity-[0.6] text-white"
              >
                COMPANY
              </p>

              <ul className="mt-6 space-y-4">
              {/* {navigation.map((item) => (
                  <li>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      key={item.name}
                    >
                      <FooterText text={item.name} />
                    </button>
                  </li>
                ))} */}
                <li>
                  <a href="#">
                    <FooterText text={"About us"} />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FooterText text={"Contact us"} />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <FooterText text={"FAQs"} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p
                data-aos="fade-up"
                className="font-medium text-[1.6rem] leading-[28px] uppercase opacity-[0.6] text-white"
              >
                Solutions
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <FooterText text={"Event Planning"} />
                </li>

                <li>
                  <FooterText text={"Transparent Pricing"} />
                </li>

                <li>
                  <FooterText text={"Event Ticketing"} />
                </li>
                <li>
                  <FooterText text={"Security and Reliability"} />
                </li>
              </ul>
            </div>
            <div>
              <p
                data-aos="fade-up"
                className="font-medium text-[1.6rem] leading-[28px] opacity-[0.6] text-white"
              >
                LEGAL
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <FooterText text={"Privacy Policy"} />
                </li>

                <li>
                  <FooterText text={"Terms of Service"} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          src={footer}
          alt="footer logo"
          className="ml-auto max-w-[584px] w-full"
        />
        <div
          style={{ borderTopColor: `rgba(255, 255, 255, 0.1)` }}
          className="border-t"
          data-aos="fade-up"
        >
          <p
            data-aos="fade-up"
            className="text-[14px] text-white text-left mt-8"
          >
            &copy; 2024 3ventiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const FooterText = ({ text }) => {
  return (
    <p
      data-aos="fade-up"
      className="font-medium text-[1.6rem] leading-[28px]  text-white"
    >
      {text}
    </p>
  );
};

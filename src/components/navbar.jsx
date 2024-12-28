import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import VentisLogo from "./3ventis";
import { Link } from "react-scroll";
import AnimatedButton from "./button";

const navigation = [
  { name: "About us", href: "about-us" },
  { name: "How It Works", href: "how-it-works" },
  { name: "Our users", href: "our-users" },
  { name: "FAQs", href: "faqs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 left-0 right-0 z-50 bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex md:flex-1">
          <button className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <VentisLogo />
          </button>
        </div>
        <div className="flex gap-4 md:hidden">
          <AnimatedButton text="Early Access" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-12" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <button
              onClick={() => scrollToSection(item.href)}
              key={item.name}
              className="text-[1.4rem] font-medium "
              style={{ color: "rgba(52, 51, 48, 0.4)" }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <AnimatedButton text="Early Access" />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <VentisLogo />
            </a>
            <div className="flex gap-4">
              <AnimatedButton text="Early Access" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-12" />
              </button>
            </div>
          </div>
          <div className="mt-12 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6  grid gap-8">
                {navigation.map((item) => (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    key={item.name}
                    className="text-[1.4rem] font-medium text-right "
                    style={{ color: "rgba(52, 51, 48, 0.4)" }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              {/* <div className="py-6">
                <button className="text-[1.4rem] font-medium text-white p-5 px-16 rounded-full primary-bg">
                  Early Access
                </button>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

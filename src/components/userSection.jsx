import React from "react";
import vendor from "../assets/images/Vendor.png";
import wedding from "../assets/images/wedding.png";

export default function UserSection() {
  return (
    <div className="Container py-16 grid gap-12">
      <div className="grid gap-8">
        <p className="primary-color text-[1.4rem] leading-[1.8rem] text-left">
          TARGET AUDIENCE
        </p>
        <div className="text-left grid gap-4 ">
          <p className="text-[2.8rem] font-medium leading-[3.4rem] max-w-[450px] w-full ">
            Who is 3ventiz For?
          </p>
          <p className="text-[1.4rem] leading-[2rem] text-color max-w-[400px] ">
            3ventiz connects event planners with trusted vendors, making
            planning seamless and business growth effortless
          </p>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid sm:grid-cols-[32rem_1fr] gap-8">
          <div
            style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] p-8 flex flex-col gap-8 justify-between items-start"
          >
            <div className="grid gap-6">
              <p className="italic text-[3.2rem] leading-[4rem] font-medium">
                For Vendors
              </p>
              <p
                style={{ color: "rgba(2, 1, 29, 1)" }}
                className="text-[1.4rem] leading-[2rem]  max-w-[27rem] "
              >
                Showcase your services, connect with more clients, and manage
                bookings effortlessly. 3ventiz is your partner for business
                growth.
              </p>
            </div>
            <button className="primary-darkbg rounded-full p-2 px-6 text-[1.4rem] leading-[1.8rem] font-medium text-white  ">Join as a Vendor</button>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] sm:h-[40rem] w-full">
            <img src={vendor} alt="vendor image" className="w-full h-full" />
          </div>
        </div>
        <div className="grid sm:grid-cols-[1fr_32rem] gap-8">
          <div
            style={{ backgroundColor: "rgba(239, 247, 246, 1)" }}
            className="rounded-[1.6rem] sm:order-2 p-8 flex flex-col gap-8 justify-between items-start"
          >
            <div className="grid gap-6">
              <p className="italic text-[3.2rem] leading-[4rem] font-medium">
              For Clients (Event Hosts & Planners)
              </p>
              <p
                style={{ color: "rgba(2, 1, 29, 1)" }}
                className="text-[1.4rem] leading-[2rem]  max-w-[27rem] "
              >
               Whether you’re planning a wedding, birthday, corporate event, or baby shower, 3ventiz helps you find trusted vendors, stay within budget, and plan with ease.
              </p>
            </div>
            <button className="primary-darkbg rounded-full p-2 px-6 text-[1.4rem] leading-[1.8rem] font-medium text-white  ">Join as a Client</button>
          </div>
          <div className="overflow-hidden sm:order-1 sm:h-[40rem] w-full rounded-[1.6rem]">
            <img src={wedding} alt="vendor image" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

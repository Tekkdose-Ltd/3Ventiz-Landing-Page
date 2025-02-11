import hero from "../assets/images/heroBg.png";
import heroxs from "../assets/images/heroBgxs.png";
import heromd from "../assets/images/heroBgmd.png";
import { useState } from "react";
import Success from "./success";

export default function HeroSection({ click }) {
  const [isOpen, setIsOpen] = useState(false);

  const modalFunction = () => {
    setIsOpen(!isOpen);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <section className="p-8 mt-[75px]">
      {isOpen && <Success close={() => modalFunction()} />}
      <div
        style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% 100%" }}
        className="relative bg-no-repeat h-[620px] hidden md:block  sm:h-[713px] w-full rounded-[16px]"
      >
        <div className="Container !pb-0 mb-8 pt-28">
          <div className="absolute left-0 p-4 sm:p-0 xs:!pr-4  bottom-12 sm:left-12 mx-auto md+:max-w-[600px] w-full">
            {/* <img data-aos="zoom-in-up" src={calender} alt="calender logo" className="absolute top-[4rem] left-[-6rem]  sm:left-[2rem]  z-[1000]" /> */}

            <div className="grid gap-8 ">
              <p
                data-aos="zoom-in-up"
                className="strong font-normal  text-[4rem] md+:text-[6.4rem]  text-white leading-[40px] md+:leading-[70px]"
              >
                Plan Memorable Events with Ease
              </p>
              <p
                data-aos="zoom-in-up"
                className="md+:max-w-[420px] w-full leading-[2rem] text-[1.4rem] text-white"
              >
                Discover reliable vendors, manage your budget, and plan your
                events seamlessly—all in one platform designed to simplify your
                experience.
              </p>
            </div>
            <InputContainer open={() => setIsOpen(true)} />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${heromd})`,
          backgroundSize: "100% 100%",
        }}
        className="relative bg-no-repeat h-[620px] hidden xs:block md:hidden  sm:h-[713px] w-full rounded-[16px]"
      >
        <div className="Container !pb-0 mb-8 pt-28">
          <div className="absolute left-0 p-4 sm:p-0 xs:!pr-4  bottom-12 sm:left-12 mx-auto md+:max-w-[600px] w-full">
            {/* <img data-aos="zoom-in-up" src={calender} alt="calender logo" className="absolute top-[4rem] left-[-6rem]  sm:left-[2rem]  z-[1000]" /> */}

            <div className="grid gap-8 ">
              <p
                data-aos="zoom-in-up"
                className="strong font-normal  text-[4rem] md+:text-[6.4rem]  text-white leading-[40px] md+:leading-[70px]"
              >
                Plan Memorable Events with Ease
              </p>
              <p
                data-aos="zoom-in-up"
                className="md+:max-w-[420px] w-full leading-[2rem] text-[1.4rem] text-white"
              >
                Discover reliable vendors, manage your budget, and plan your
                events seamlessly—all in one platform designed to simplify your
                experience.
              </p>
            </div>
            <InputContainer open={() => setIsOpen(true)} />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${heroxs})`,
          backgroundSize: "100% 100%",
        }}
        className="relative bg-no-repeat h-[620px] block xs:hidden  sm:h-[713px] w-full rounded-[16px]"
      >
        <div className="Container !pb-0 mb-8 pt-28">
          <div className="absolute left-0 p-4 sm:p-0 bottom-12 sm:left-12 mx-auto md+:max-w-[600px] w-full">
            {/* <img data-aos="zoom-in-up" src={calender} alt="calender logo" className="absolute top-[4rem] left-[-6rem]  sm:left-[2rem]  z-[1000]" /> */}

            <div className="grid gap-8 ">
              <p
                data-aos="zoom-in-up"
                className="strong font-normal  text-[4rem] md+:text-[6.4rem]  text-white leading-[40px] md+:leading-[70px]"
              >
                Plan Memorable Events with Ease
              </p>
              <p
                data-aos="zoom-in-up"
                className="md+:max-w-[420px] w-full leading-[2rem] text-[1.4rem] text-white"
              >
                Discover reliable vendors, manage your budget, and plan your
                events seamlessly—all in one platform designed to simplify your
                experience.
              </p>
            </div>

            <InputContainer open={() => setIsOpen(true)} />
          </div>
        </div>
      </div>
    </section>
  );
}

const InputContainer = ({ open }) => {
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);

  const url = `https://zm8zfyfxi5.execute-api.eu-north-1.amazonaws.com/subscribe`;

  const handleSubmit = async () => {
    if (!email) return;
    // e.preventDefault();
    // console.log(email);

    try {
      setIsActive(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        setEmail("");
        setIsActive(false);
        open();
      } else {
        const errors = await response.json();
        setIsActive(false);
        // console.log("wrong email")
        if (errors[0]) {
          alert(errors[0].message);
        } else {
          alert(errors.error);
        }
      }

      // console.log(response);
      // console.log(await response.json());
    } catch (error) {
      console.log(error);
      setIsActive(false);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.4)",
      }}
      data-aos="zoom-in-up"
      className="grid grid-cols-2 xs:flex items-center xs:gap-2 justify-between max-w-[350px] w-full rounded-full p-2 xs:pl-[1.6rem] border mt-4 "
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id=""
        className="xs:flex-1 text-[1.4rem] outline-none text-white placeholder:text-white bg-transparent"
        placeholder="name@email.com"
      />
      <button
        disabled={isActive}
        onClick={handleSubmit}
        className="bg-white primary-color font-semibold text-[1.2rem] sm:text-[1.4rem] px-2  xs:px-[1.6rem]  py-[1.2rem]  rounded-full "
      >
        {!isActive ? "Join waitlist" : "sending..."}
      </button>
    </div>
  );
};

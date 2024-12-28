import dashboard from "../assets/images/Dashboard Image.png";
import hero from "../assets/images/heroBg.png";

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% 100%" }}
      className="bg-no-repeat h-[723px] sm:h-[1021px] lg:h-[1195px] w-full"
    >
      <div className="Container mb-8 pt-28">
        
        <div className="relative mx-auto max-w-[600px] w-full  py-12">
          {/* <img data-aos="zoom-in-up" src={calender} alt="calender logo" className="absolute top-[4rem] left-[-6rem]  sm:left-[2rem]  z-[1000]" /> */}
          <div className="flex justify-center">
            <div
              data-aos="zoom-in-up"
              className="relative rounded-full pl-4 px-2 py-3  max-w-[44.4rem] w-full bg-white flex gap-2  justify-between items-center "
            >
              <p className="text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] flex-1 text-color">
                Connecting Hosts, Vendors, Simplifying{" "}
                <span className="hidden md:inline">Event</span> Planning.
              </p>

              <span className="primary-bg p-1 px-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="grid justify-center items-center mt-8">
            <p
              data-aos="zoom-in-up"
              className="strong text-[3rem] xs:text-[4rem] sm:text-[6.4rem] text-center font-semibold primary-color leading-[40px] sm:leading-[70px]"
            >
              Plan{" "}
              <span className="font-light text-color">Memorable Events</span>{" "}
              with Ease
            </p>
            <p
              data-aos="zoom-in-up"
              className="max-w-[420px] w-full mx-auto text-center text-[1.2rem] sm:text-[1.4rem] text-color"
            >
              Discover reliable vendors, manage your budget, and plan your
              events seamlessly—all in one platform designed to simplify your
              experience.
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            style={{ backgroundColor: "rgba(220, 220, 222, 1)" }}
            className="flex items-center gap-2 sm:gap-4 justify-between mt-4 max-w-[350px] w-full mx-auto  rounded-[1rem] p-2 pl-4 border border-[rgba(220, 220, 222, 1)] "
          >
            <input
              type="email"
              name="email"
              id=""
              className="flex-1 text-[1.4rem] outline-none text-gray-400 bg-transparent"
              placeholder="Enter email address"
            />
            <button className="primary-bg text-white text-[1.2rem] sm:text-[1.4rem] px-4 sm:px-[1.8rem] py-3 sm:py-6 rounded-[6px] ">
              Join waitlist
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          className="flex items-center max-w-[30rem]   xs:max-w-[94rem] w-full mx-auto relative "
        >
          <img
            src={dashboard}
            alt="dashboard image"
            className="object-cover w-full hidden lg:block"
          />
          <img
            src={dashboard}
            alt="dashboard image"
            className="object-cover w-full  block lg:hidden "
          />
          <div className="absolute left-0 right-0 top-0 bottom-0 rounded-[1.6rem] backdrop-blur-[4px]"></div>
          <div
            style={{ borderColor: "#c5c5c7" }}
            className="abscenter bg-white w-max px-[1.2rem] sm:px-[2.4rem] py-[1.5rem] lg:px-[3.2rem] lg:py-[2rem] rounded-full border flex items-center gap-4"
          >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 52 52"
                className="size-[3.6rem] lg:size-[5.2rem]"
              >
                <path
                  d="M 15.386 21.667 L 15.167 21.667 L 15.167 17.333 C 15.167 11.35 20.017 6.5 26 6.5 C 31.983 6.5 36.833 11.35 36.833 17.333 L 36.833 21.667 L 36.614 21.667 M 26 30.333 L 26 34.667 M 41.167 32.5 C 41.167 40.876 34.376 47.667 26 47.667 C 17.624 47.667 10.833 40.876 10.833 32.5 C 10.833 24.124 17.624 17.333 26 17.333 C 34.376 17.333 41.167 24.124 41.167 32.5 Z"
                  fill="transparent"
                  stroke-width="4"
                  stroke="rgba(0, 0, 0, 0.6)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            <p className="strong font-medium text-[2.8rem] lg:text-[4.8rem] text-black opacity-[0.5]">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

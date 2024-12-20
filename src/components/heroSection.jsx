import hero from "../assets/images/heroBg.png";
import dashboard from "../assets/images/Dashboard Image.png";

export default function HeroSection() {
  return (
    <div style={{ backgroundImage: `url(${hero})` }} className="bg-no-repeat">
      <div className="Container mb-8">
        <div className="mx-auto max-w-[600px] w-full pt-28 py-12">
          <div className="flex justify-center">
            <div className="relative rounded-full pl-4 px-2 py-2 w-full bg-white flex gap-2 md:gap-8 justify-between items-center ">
              <p className="text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] text-color">
                Connecting Hosts, Vendors, Simplifying{" "}
                <span className="hidden xs:block">Event</span> Planning.
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
          <div className="grid justify-center items-center">
            <p className="text-[3rem] xs:text-[4rem] sm:text-[6.4rem] text-center font-semibold primary-color leading-[40px] sm:leading-[70px]">
              Plan{" "}
              <span className="font-medium text-color">Memorable Events</span>{" "}
              with Ease
            </p>
            <p className="max-w-[420px] w-full mx-auto text-center text-[1.2rem] sm:text-[1.4rem] text-color">
              Discover reliable vendors, manage your budget, and plan your
              events seamlessly—all in one platform designed to simplify your
              experience.
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 justify-between mt-4 max-w-[350px] w-full mx-auto bg-white rounded-[1rem] p-2 pl-4 border border-[rgba(220, 220, 222, 1)] ">
            <input
              type="email"
              name="email"
              id=""
              className="flex-1 text-[1.4rem] outline-none text-gray-400"
              placeholder="Enter email address"
            />
            <button className="primary-bg text-white text-[1.2rem] sm:text-[1.4rem] px-4 sm:px-[1.8rem] py-3 sm:py-6 rounded-[6px] ">
              Join waitlist
            </button>
          </div>
        </div>
        <div className="flex items-center ">
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
        </div>
      </div>
    </div>
  );
}

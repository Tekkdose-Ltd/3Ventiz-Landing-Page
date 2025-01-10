import dashboard from "../assets/images/Dashboard Image.png";
import hero from "../assets/images/heroBg.png";

export default function HeroSection() {
  return (
    <section className="p-8 mt-[75px]">
      <div
      style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% 100%" }}
      className="relative bg-no-repeat h-[620px]  sm:h-[713px] w-full rounded-[16px]"
    >
      <div className="Container !pb-0 mb-8 pt-28">
        
        <div className="absolute bottom-12 left-12 mx-auto md+:max-w-[600px] w-full">
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
          <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderColor: "rgba(255, 255, 255, 0.4)",
              }}
              data-aos="zoom-in-up"
              className="flex items-center gap-2 justify-between max-w-[350px] w-full rounded-full p-2 pl-[1.6rem] border mt-4 "
            >
              <input
                type="email"
                name="email"
                id=""
                className="flex-1 text-[1.4rem] outline-none text-white placeholder:text-white bg-transparent"
                placeholder="Enter email address"
              />
              <button className="bg-white primary-color font-semibold text-[1.2rem] sm:text-[1.4rem] px-[1.6rem]  py-[1.2rem]  rounded-full ">
                Join waitlist
              </button>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}

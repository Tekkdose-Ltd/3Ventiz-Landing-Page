import {
  About,
  AnimatedButton,
  Faqs,
  Footer,
  HowItWorks,
  UserSection,
  HeroSection,
} from "../components";

export default function HomeScreen() {
  return (
    <div>
      <HeroSection />
      <section id="about-us">
        <About />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="our-users">
        <UserSection />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
      <section className="Container py-24">
        <div className="md+:max-w-[60rem] w-full mx-auto flex flex-col justify-start items-start gap-4 text-center">
          <p
            data-aos="fade-up"
            className="text-[3rem] strong sm:text-[4rem] md+:text-[6.4rem] leading-[4.8rem] md+:leading-[7.2rem] font-medium "
          >
            Your Dream Event is Just a{" "}
            <span className="relative bg-gradient-to-r from-[#171591] via-[#3B81AF]  to-[#3B81AF] bg-clip-text text-transparent">
              Click Away
            </span>{" "}
          </p>
          <p
            data-aos="fade-up"
            className="text-[1.4rem] leading-[2rem] text-color md+:max-w-[52.8rem] w-full mx-auto"
          >
            Join thousands of happy users who’ve discovered the easiest way to
            plan their events. Whether you’re hosting or providing services,
            3ventiz is your go-to platform for stress-free event management.
          </p>
          <div
            data-aos="fade-up"
            className="flex items-center justify-center w-full"
          >
            <AnimatedButton text="Join Waitlist" icns="translate-x-[5.4rem]" />
          </div>
        </div>
      </section>
    </div>
  );
}

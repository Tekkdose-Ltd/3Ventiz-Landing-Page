import AOS from "aos";
import "aos/dist/aos.css";

import {
  HeroSection,
  Footer,
  Navbar,
  About,
  HowItWorks,
  UserSection,
  Faqs,
  AnimatedButton,
} from "./components";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <main>
      <Navbar />
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
        <div className="md+:max-w-[600px] w-full mx-auto flex flex-col justify-start items-start gap-4 text-center">
          <p
            data-aos="fade-up"
            className="text-[3rem] strong sm:text-[4rem] md+:text-[6.4rem] leading-[48px] md+:leading-[72px] font-medium "
          >
            Your Dream Event is Just a Click Away
          </p>
          <p
            data-aos="fade-up"
            className="text-[1.4rem] leading-[20px] text-color md+:max-w-[528px] w-full mx-auto"
          >
            Join thousands of happy users who’ve discovered the easiest way to
            plan their events. Whether you’re hosting or providing services,
            3ventiz is your go-to platform for stress-free event management.
          </p>
          <div data-aos="fade-up" className="flex items-center justify-center w-full">
            <AnimatedButton text="Join Waitlist" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;

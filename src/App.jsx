import { HeroSection, Footer, Navbar, About, HowItWorks, UserSection, Faqs } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <HowItWorks />
      <UserSection />
      <Faqs />
      <section className="Container py-24">
        <div className="max-w-[560px] w-full mx-auto flex flex-col justify-start items-start gap-4 text-center">
          <p className="text-[3rem] xs:text-[4rem] sm:text-[6.4rem] leading-[48px] sm:leading-[72px] font-medium ">
            Your Dream Event is Just a Click Away
          </p>
          <p className="text-[1.4rem] leading-[20px] text-color max-w-[528px] w-full mx-auto" >Join thousands of happy users who’ve discovered the easiest way to plan their events. Whether you’re hosting or providing services, 3ventiz is your go-to platform for stress-free event management.</p>
          <div className="flex items-center justify-center w-full">
          <button className="text-[1.4rem] leading-[18px] px-16 p-6 primary-bg font-medium text-white block rounded-full">Join Waitlist</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;

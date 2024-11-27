import React from "react";
import Navarea from "./Components/Navarea";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Offer from "./Components/Offer";
import DevitCard from "./Components/DevitCard";
import FindCard from "./Components/FindCard";
import Testimonial from "./Components/Testimonial";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <main className="overflow-x-hidden ">
        <Navarea />
        <div className="w-full max-w-[1400px] px-2.5 md:px-10 lg:px-20 xl:px-24 py-5 mx-auto">
          <div className="sm:space-y-[128px] ">
            <Hero />
            <About />
            <Offer/>
            <DevitCard/>
            <FindCard/>
            <Testimonial/>
            <FAQs/>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}

export default App;

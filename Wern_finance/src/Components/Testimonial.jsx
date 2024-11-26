import { User } from "@nextui-org/react";
import React from "react";

const Testimonial = () => {
  const CardData = [
    {
      icon: "quote.svg",
      details:
        `"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings"`,
      profile: "profile1.png",
      name: "Hadid Khan",
      type: "UIUX Designer",
    },
    {
      icon: "quote.svg",
      details:
       ` "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."`,
      profile: "profile2.png",
      name: "Wade Warren",
      type: "Web Designer",
    },
    {
      icon: "quote.svg",
      details:
       ` "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking."`,
      profile: "profile3.png",
      name: "Jenny Wilson",
      type: "Trust Administrator",
    },
  ];
  return (
    <section className="mt-10 lg:mt-20 xl:mt-24">
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
        {CardData.map((item, i) => (
          <div
            key={i}
            className=" gap-5 bg-[#27322F3D]/25 rounded-2xl  space-y-5 py-8 px-5"
          >
            
              <img  className="bg-[#3D3F54] rounded-full p-3" src={item.icon} alt="" />
        
            <p>{item.details}</p>
            <div className="flex items-center gap-3">
              <img src={item.profile} alt="" />
              <div >
                <h4>{item.name}</h4>
                <p className="text-secondary text-xs pt-[2px]">{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

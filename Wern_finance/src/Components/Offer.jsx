import React from "react";

const Offer = () => {
  const cardData = [
    {
      image: "quote.svg",
      title: "Cardano Debit-Cards",
      description:
        "Cardano, simplified. The debit card that makes crypto spending easy.",
    },
    {
      image: "ramp.svg",
      title: "On & Off Ramp",
      description:
        "Fiat meets crypto, effortlessly buy, sell, and manage.",
    },
    {
      image: "solution.svg",
      title: "Solutions for business",
      description:
        "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
    },
  ];
  return (
    <section className="space-y-6 lg:space-y-12 mt-10">
      <h1 className="text-2xl lg:text-3xl  font-bold text-center">
        What do we offer?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((item, i) => (
          <div key={i} className="flex gap-4 items-center">
            <div className="bg-[#3D3F54] p-3 rounded-2xl">
              <img src={item.image} alt="icon" />
            </div>
            <div>
              <h1 className="text-lg font-bold">{item.title}</h1>
              <p className="text-sm text-secondary mt-1 max-w-[250px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;

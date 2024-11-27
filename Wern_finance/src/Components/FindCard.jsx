import { Button } from "@nextui-org/react";
import React from "react";

const FindCard = () => {
  return (
    <section className="flex  flex-col sm:flex-row gap-6 lg:gap-20  justify-between items-center mt-14 lg:mt-14 xl:mt-20">
      <img
        className="w-10/12 sm:w-1/2 xl:-mr-[130px]"
        src="hero3.svg"
        alt="hero"
      />
      <div className="space-y-6 sm:w-1/2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold leading-tight">
        Find the Perfect Card for You
        </h1>
        <p className="text-secondary w-4/5 text-xs lg:text-sm xl:text-base">
        Unlocking the Power of Crypto, Both Virtually and Physically
        Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.
        </p>
        <Button variant="solid" color="primary" radius="full">
        Learn More
        </Button>
      </div>
    </section>
  );
};

export default FindCard;

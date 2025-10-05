import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Your B2B Marketplace for{" "}
        <span className="text-sky-600">Aquaculture</span> &{" "}
        <span className="text-green-600">Agriculture</span>
      </h1>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Connecting suppliers and buyers in the aquaculture and agriculture
        industries with efficiency and trust.
      </p>
    </section>
  );
};

export default Hero;

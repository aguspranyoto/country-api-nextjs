import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";

const Homepage = () => {
  return (
    <section className="w-full pt-12 pb-6 md:pb-4 flex justify-center items-center ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-0 justify-between md:flex-row ">
          <div className="order-2 md:order-1 flex w-full md:max-w-2xl flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Explore the World with Our Country API
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Get real-time and historical data on countries around the globe.
              </p>
            </div>
            <SearchInput />
          </div>
          <Image
            src="/globe.png"
            width="450"
            height="450"
            alt="Globe"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;

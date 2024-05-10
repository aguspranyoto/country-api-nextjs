import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";

const Homepage = () => {
  return (
    <section className="w-full pt-24 pb-12 flex justify-center items-center ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12 md:gap-0 justify-between md:flex-row ">
          <div className="order-2 md:order-1 flex w-full md:max-w-2xl flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Explore the World with Our Country API
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Get real-time and historical data on countries around the globe.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Input
                className=""
                placeholder="Search country name..."
                type="search"
              />
              <Button className={buttonVariants()}>Search</Button>
            </div>
          </div>
          <Image
            src="/globe.png"
            width="550"
            height="550"
            alt="Globe"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;

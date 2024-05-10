import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";

interface CountryProps {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  capital: string[];
}

async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CountryList = async () => {
  const data = await getData();
  return (
    <div className="flex flex-wrap gap-12">
      {data?.map((country: CountryProps) => {
        return (
          <Card className="w-full md:w-1/6 shadow-md flex flex-col justify-between">
            <Link href={`/detail/${country?.name?.common}`}>
              <div>
                <CardHeader>
                  <CardTitle className="break-words text-lg">
                    {country?.name?.common}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={country?.flags?.png}
                    width="300"
                    height="300"
                    alt="Globe"
                  />
                </CardContent>
              </div>
              <CardFooter>
                <div className="flex flex-col">
                  <div className="text-lg">Capital:</div>
                  <div className="text-lg font-semibold">
                    {country?.capital?.[0]}
                  </div>
                </div>
              </CardFooter>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default CountryList;

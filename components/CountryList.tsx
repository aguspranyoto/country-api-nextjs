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

const filteredCountry = async ({ name }: { name: string }) => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const filtered = data.filter((country: CountryProps) => {
    return country.name.common.toLowerCase().includes(name.toLowerCase());
  });
  return filtered;
};

const CountryList = async ({ name }: { name: string }) => {
  const filtered = await filteredCountry({ name });

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-12">
      {filtered.length > 0 ? (
        filtered?.map((country: CountryProps) => {
          return (
            <Card
              className="w-full shadow-md flex flex-col justify-between"
              key={country?.name?.common}
            >
              <Link href={`/detail/${country?.name?.common}`}>
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="break-words text-md sm:text-lg">
                      {country?.name?.common}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Image
                      src={country?.flags?.png}
                      width="300"
                      height="300"
                      alt="country flag"
                      className="shadow-md"
                    />
                  </CardContent>
                </div>
                <CardFooter>
                  <div className="flex flex-col">
                    <div className="text-md sm:text-lg">Capital:</div>
                    <div className="text-md sm:text-lg font-semibold">
                      {country?.capital?.[0]}
                    </div>
                  </div>
                </CardFooter>
              </Link>
            </Card>
          );
        })
      ) : (
        <Card className="w-full shadow-md flex justify-center items-center">
          <CardHeader>
            <CardTitle className="break-words text-lg">
              No countries found
            </CardTitle>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

export default CountryList;

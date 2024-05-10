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
    <div className="flex flex-wrap gap-6 md:gap-12">
      {filtered.length > 0 ? (
        filtered?.map((country: CountryProps) => {
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

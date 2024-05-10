import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

interface CountryNameProps {
  name: string;
}

async function getDetailCountry({ name }: CountryNameProps) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DetailCountry = async ({ name }: CountryNameProps) => {
  const data = await getDetailCountry({ name });

  return (
    <>
      <section className="min-w-screen min-h-screen flex items-center pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <Link
            href="/"
            className={buttonVariants({
              className: "mx-32 text-xl font-normal",
            })}
          >
            Back
          </Link>
          <div className="grid gap-8 md:px-32 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col space-y-4">
              <Image
                alt="Country Flag"
                className="rounded-lg shadow-lg"
                height="200"
                src={data?.[0]?.flags?.png}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {data?.[0]?.name?.common}
                </h1>
                <div className="flex items-center space-x-4">
                  <p className="text-2xl">Capital: {data?.[0]?.capital}</p>
                  <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                  <p className="text-2xl">
                    Population: {data?.[0]?.population.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:items-end space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
                    Currency
                  </p>
                  <div>
                    <ul>
                      {Object.entries(data?.[0]?.currencies).map(
                        ([currencyCode, currency]: any) => {
                          //   console.log(
                          //     "currencyCode:",
                          //     currencyCode,
                          //     "currency:",
                          //     currency
                          //   ); // Logging the currency object
                          return (
                            <li key={currencyCode} className="text-2xl">
                              {currency.name} ({currency.symbol})
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
                <div className="grid gap-1">
                  <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
                    Languages
                  </p>
                  <div>
                    <ul>
                      {Object.entries(data?.[0]?.languages).map(
                        ([languageCode, languageName]: any) => (
                          <li key={languageCode} className="text-2xl">
                            {languageName}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="grid gap-1">
                  <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
                    Area
                  </p>
                  <p className="text-2xl">{data?.[0].area} km²</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
                    Calling Code
                  </p>
                  <p className="text-2xl truncate">
                    {/* {data?.[0]?.idd?.root}
                    {data?.[0]?.idd?.suffixes} */}
                    {name == "United%20States"
                      ? `${data?.[0]?.idd?.root}`
                      : `${data?.[0]?.idd?.root}${data?.[0]?.idd?.suffixes.join(
                          ", "
                        )}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCountry;

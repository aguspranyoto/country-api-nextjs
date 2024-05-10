import React from "react";

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
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-8 px-4 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <img
                alt="Country Flag"
                className="rounded-lg"
                height="200"
                src="/placeholder.svg"
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
                  <p>Capital: {data?.[0]?.capital}</p>
                  <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                  <p>Population: {data?.[0]?.population.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Currency
                  </p>
                  <p>United States Dollar (USD)</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Languages
                  </p>
                  <p>English</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Area
                  </p>
                  <p>9,833,517 km²</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Calling Code
                  </p>
                  <p>+1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Currency
              </p>
              <p>United States Dollar (USD)</p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Languages
              </p>
              <p>English</p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Area
              </p>
              <p>9,833,517 km²</p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Calling Code
              </p>
              <p>+1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCountry;

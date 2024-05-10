import DetailCountry from "@/components/DetailCountry";
import React from "react";

interface CountryName {
  name: string;
}

const page = async ({ params }: { params: { name: string } }) => {
  const countryName = params.name;

  return (
    <main>
      <DetailCountry name={countryName} />
    </main>
  );
};

export default page;

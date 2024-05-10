"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.push(`/?name=${search}`);
  }, [search]);

  return (
    <div className="flex items-center gap-4">
      <Input
        className="border border-slate-600 text-md md:text-md md:p-6"
        placeholder="Search country name..."
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <Button className={buttonVariants()}>Search</Button> */}
    </div>
  );
};

export default SearchInput;

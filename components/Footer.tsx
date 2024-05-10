import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 md:py-4 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Agus Pranyoto. visit my{" "}
            <Link
              href="https://www.linkedin.com/in/aguspranyoto/"
              className="text-blue-600 underline"
            >
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

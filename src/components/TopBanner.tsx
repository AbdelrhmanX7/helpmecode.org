import Link from "next/link";
import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-primary px-4 py-2 text-center text-white">
      <p className="text-sm">
        REGISTRATION IS NOW OPEN FOR SPRING COURSES. CLICK{" "}
        <Link
          href="https://form.jotform.com/242796660471162"
          className="font-bold underline"
        >
          HERE
        </Link>{" "}
        TO SIGN UP.
      </p>
    </div>
  );
};

export default TopBanner;

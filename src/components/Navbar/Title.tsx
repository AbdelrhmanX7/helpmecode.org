"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Title = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div className="p-2 w-fit rounded-md border-2 border-primary/20 shadow-sm">
        <Image
          src="/header-icon.svg"
          alt="Logo"
          width={20}
          height={20}
          className="dark:invert invert-0"
        />
      </div>
      <p className="text-base text-[#6271be] font-semibold tracking-wide bg-background border-2 border-primary/20 px-3 py-1.5 rounded-md">
        <code>
          print(<span className="text-primary">&quot;Help Me CODE&quot;</span>)
          <span
            className={`text-primary ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </code>
      </p>
    </div>
  );
};

export default Title;

"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Title from "./Title";
import TopBanner from "../TopBanner";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`z-50 sticky top-0`}>
      <TopBanner />
      <div className="flex flex-col gap-4 w-full bg-background px-2 sm:px-4 py-4 top-0 border-b transition-transform duration-300 shadow-sm">
        <div className="flex items-center justify-between">
          <Title />

          <div className="lg:hidden flex items-center justify-center">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <Menu />
            </Button>
          </div>

          {width > 1400 && <NavLinks />}

          <div className="hidden lg:flex space-x-4 items-center">
            <Button asChild>
              <Link
                href="https://form.jotform.com/242796660471162"
                aria-label="YouTube"
              >
                Join now!
              </Link>
            </Button>

            <ModeToggle />
          </div>
        </div>
        {width <= 1400 && width > 1024 && <NavLinks />}
        <MobileNav isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

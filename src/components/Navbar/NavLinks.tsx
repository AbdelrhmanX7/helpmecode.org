"use client";
import { NAV_LINKS } from "@/constants";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavLinks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className="flex gap-4 text-primary mx-auto">
      {NAV_LINKS.map((item) => (
        <div key={item.name}>
          {!item.dropdown ? (
            <Button
              asChild
              className="text-base font-semibold"
              variant={pathname === item.href ? "secondary" : "ghost"}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ) : (
            <DropdownMenu
              open={isDropdownOpen}
              onOpenChange={setIsDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant={
                    isDropdownOpen || pathname.includes(item.name.toLowerCase())
                      ? "secondary"
                      : "ghost"
                  }
                  className="flex items-center justify-center gap-1 text-base font-semibold"
                >
                  <p>{item.name}</p>
                  <div className="h-fit">
                    <ChevronDown
                      className={cn(
                        "duration-150",
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      )}
                      width={16}
                      height={16}
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="space-y-1" align="start">
                {item.dropdownItems.map((dropdownItem) => (
                  <DropdownMenuItem
                    className={cn(
                      pathname === dropdownItem.href && "bg-secondary"
                    )}
                    key={dropdownItem.name}
                  >
                    <a
                      className="font-semibold w-full flex items-center justify-between"
                      href={dropdownItem.href}
                    >
                      {dropdownItem.name}
                      {pathname === dropdownItem.href && <Check />}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;

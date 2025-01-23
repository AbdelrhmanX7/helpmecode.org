import React from "react";
import { NAV_LINKS } from "@/constants";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const MobileNav = ({ isMobileMenuOpen = false }) => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden block">
      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="w-full bg-background shadow-md">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            {NAV_LINKS.map((item) => (
              <div key={item.name} className="w-full">
                {!item.dropdown ? (
                  <Button
                    className="w-full text-base font-semibold"
                    variant={pathname === item.href ? "secondary" : "ghost"}
                  >
                    <a href={item.href}>{item.name}</a>
                  </Button>
                ) : (
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.name}>
                      <AccordionTrigger className="w-full text-base font-semibold flex justify-between items-center">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Button
                              key={dropdownItem.name}
                              className={cn(
                                pathname === dropdownItem.href &&
                                  "bg-secondary",
                                "w-full text-left font-semibold"
                              )}
                              variant="ghost"
                            >
                              <a href={dropdownItem.href}>
                                {dropdownItem.name}
                              </a>
                            </Button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

"use client";
import React from "react";
import Link from "next/link";

const footerLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Programs", url: "/programs" },
  { title: "Collaborate", url: "/collaborate" },
  { title: "Resources", url: "/resources" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-background text-muted-foreground">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto px-4 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-primary">HelpMeCodeOrg</h2>
            <p className="font-semibold text-muted-foreground">
              704 228th Ave, Sammamish WA 98076 USA
            </p>
            <Link
              href="mailto:helpmecodeorgs@gmail.com"
              className="font-semibold text-primary hover:underline"
            >
              helpmecodeorgs@gmail.com
            </Link>
            <Link
              href="/suggestion-form"
              className="font-semibold text-primary hover:underline"
            >
              Suggestion Form
            </Link>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-40">
            <div>
              <ul className="space-y-2">
                {footerLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className="font-semibold hover:underline hover:text-primary transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2 font-semibold">
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-primary transition duration-300"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-primary transition duration-300"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 text-center text-sm border-t border-muted-foreground/30">
          <p className="mb-2">
            &copy; {currentYear} HelpMeCodeOrg. All Rights Reserved.
          </p>
          <p>
            Built with ❤️ by{" "}
            <Link
              href="/"
              className="hover:underline hover:text-primary transition duration-300"
            >
              HelpMeCodeOrg Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

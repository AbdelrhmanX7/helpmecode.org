"use client";
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="relative h-[80vh] md:h-[90vh]">
      {/* Background Effects */}
      <div className="absolute top-10 -left-10 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-gradient-to-tr from-pink-500 to-purple-500 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-gradient-to-tl from-indigo-500 to-blue-500 opacity-20 rounded-full blur-2xl"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center text-foreground"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Code. Connect. Community.
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-base md:text-lg font-light text-foreground/80"
        >
          Join a community of passionate developers and creators.
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-4 md:flex-row"
        >
          <Button
            asChild
            className="relative group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 text-sm md:text-lg font-medium hover:scale-105 transition-transform"
          >
            <Link href="https://form.jotform.com/242796660471162">
              Start Your Journey Today!
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="hover:bg-gray-100 hover:text-indigo-500 text-sm md:text-lg font-medium"
          >
            <Link href="/programs">
              Our Programs
              <ChevronRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-4 text-xs md:text-sm text-foreground/50 italic"
        >
          &quot;The best platform to kickstart your coding journey!&quot;
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="animate-bounce"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </motion.div>
      </div>
    </main>
  );
}

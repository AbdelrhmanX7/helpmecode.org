import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function JavaTraining() {
  return (
    <div className="min-h-screen bg-background px-2 sm:px-4 py-12 text-foreground">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-5xl font-extrabold">
          Java Training: Basics to Advanced
        </h1>
        <p className="text-lg italic">
          Master Java with hands-on projects and real-world applications.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-3xl font-bold text-primary">
              Module 1: Introduction to Java
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-foreground/60">
              <li>Overview of Java and its applications</li>
              <li>Installation and setup (JDK, IDEs, environment variables)</li>
              <li>Writing and running Java programs</li>
              <li>Variables, data types, and operators</li>
              <li>Control flow: conditional statements and loops</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-3xl font-bold text-primary">
              Module 2: Object-Oriented Programming (OOP)
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-foreground/60">
              <li>Classes and objects</li>
              <li>Constructors and destructors</li>
              <li>Encapsulation, inheritance, and polymorphism</li>
              <li>Abstract classes and interfaces</li>
              <li>Exception handling</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-3xl font-bold text-primary">
              Module 3: Java Collections and Streams
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-foreground/60">
              <li>ArrayLists, LinkedLists, HashMaps, and Sets</li>
              <li>Iterators and lambda expressions</li>
              <li>Streams and functional programming</li>
              <li>File handling and serialization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-lg bg-card p-6 text-card-foreground shadow">
          <h2 className="text-3xl font-bold">Who Should Attend?</h2>
          <p className="mt-4 text-lg">This course is ideal for:</p>
          <ul className="mt-4 list-disc list-inside text-lg">
            <li>Beginners seeking a strong Java foundation</li>
            <li>Developers expanding their programming knowledge</li>
            <li>IT professionals looking to advance their careers</li>
          </ul>
        </div>

        <div className="rounded-lg bg-card p-6 text-card-foreground shadow">
          <h2 className="text-3xl font-bold">Key Takeaways</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✅ Hands-on coding exercises</li>
            <li>✅ Real-world projects and industry insights</li>
            <li>✅ Job-ready skills for backend development and automation</li>
            <li>✅ Certification and portfolio development</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button className="text-lg font-bold" asChild>
          <Link href={"https://form.jotform.com/242796660471162"}>
            Enroll Now
          </Link>
        </Button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ScratchTraining() {
  return (
    <div className="min-h-screen bg-background px-2 sm:px-4 py-12 text-foreground">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-5xl font-extrabold">
          Scratch Programming: Beginner to Advanced
        </h1>
        <p className="text-lg italic">
          Learn to code through fun and interactive projects with Scratch!
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-3xl font-bold text-primary">
              Module 1: Getting Started with Scratch
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-foreground/60">
              <li>Introduction to Scratch and its interface</li>
              <li>Understanding sprites, backdrops, and blocks</li>
              <li>Creating your first Scratch project</li>
              <li>Basic motion and events</li>
              <li>Saving and sharing projects</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-3xl font-bold text-primary">
              Module 2: Fundamentals of Scratch Programming
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-foreground/60">
              <li>Understanding loops and conditions</li>
              <li>Using variables in Scratch</li>
              <li>Creating simple animations</li>
              <li>Building interactive stories</li>
              <li>Debugging and improving projects</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-3xl font-bold text-primary">
              Module 3: Advanced Scratch Projects
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-foreground/60">
              <li>Building games with Scratch</li>
              <li>Using sound and music in projects</li>
              <li>Introduction to artificial intelligence with Scratch</li>
              <li>Collaborating on Scratch community projects</li>
              <li>Creating and publishing Scratch extensions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-lg bg-card p-6 text-card-foreground shadow">
          <h2 className="text-3xl font-bold">Who Should Attend?</h2>
          <p className="mt-4 text-lg">This course is ideal for:</p>
          <ul className="mt-4 list-disc list-inside text-lg">
            <li>Kids seeking to learn coding creatively</li>
            <li>Beginners starting their programming journey</li>
            <li>Educators teaching programming to students</li>
          </ul>
        </div>

        <div className="rounded-lg bg-card p-6 text-card-foreground shadow">
          <h2 className="text-3xl font-bold">Key Takeaways</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✅ Hands-on coding activities</li>
            <li>✅ Fun and interactive projects</li>
            <li>✅ Strong foundation for learning advanced programming</li>
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

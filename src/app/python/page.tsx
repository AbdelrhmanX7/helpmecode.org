import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PythonInfoPage() {
  return (
    <div className="min-h-screen bg-background px-2 sm:px-4 py-12 text-foreground">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold text-primary">
          Python Programming Class Fall 2025
        </h1>
        <p className="text-lg italic text-foreground/70">
          This Python Programming Class is tailored for students aged 10 and up,
          introducing them to the fundamentals of text-based programming. The
          course focuses on developing problem-solving techniques through
          learning Python syntax, loops, conditionals, and basic data handling.
        </p>
      </div>

      <div className="container mx-auto mt-12 space-y-8">
        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-2xl font-semibold text-primary">
              Course Details
            </h2>
            <ul className="mt-4 space-y-2 list-disc list-inside text-lg text-foreground/70">
              <li>
                <strong>Instructor:</strong> Aryan Sahai
              </li>
              <li>
                <strong>Age Recommendation:</strong> 10+
              </li>
              <li>
                <strong>Course Duration:</strong> 12 Weeks
              </li>
              <li>
                <strong>Schedule:</strong> Thursdays from 4:00 PM - 5:00 PM PST
              </li>
              <li>
                <strong>Start Date:</strong> March 14th
              </li>
              <li>
                <strong>Location:</strong> Virtual (Zoom). Google Classroom code
                will be shared upon registration.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-2xl font-semibold text-primary">
              Course Overview
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              The Python Programming Class provides students with a solid
              foundation in text-based coding. By the end of the course,
              students will have learned the basics of Python, including loops,
              functions, conditionals, and basic data structures. The focus will
              be on understanding fundamental programming concepts and applying
              them to solve real-world problems.
            </p>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-2xl font-semibold text-primary">
              Course Curriculum
            </h2>
            <ul className="mt-4 space-y-4 list-decimal list-inside text-lg text-foreground/70">
              <li>
                <strong>Week 1:</strong> Introduction to Python and Setup
              </li>
              <li>
                <strong>Week 2:</strong> Variables, Data Types, and Input
              </li>
              <li>
                <strong>Week 3:</strong> Conditionals and Decision Making
              </li>
              <li>
                <strong>Week 4:</strong> Loops (For and While)
              </li>
              <li>
                <strong>Week 5:</strong> Functions and Code Organization
              </li>
              <li>
                <strong>Week 6:</strong> Lists and Basic Data Structures
              </li>
              <li>
                <strong>Week 7:</strong> String Manipulation
              </li>
              <li>
                <strong>Week 8:</strong> Error Handling and Debugging
              </li>
              <li>
                <strong>Week 9:</strong> Dictionaries and Nested Data Structures
              </li>
              <li>
                <strong>Week 10:</strong> File I/O (Input and Output)
              </li>
              <li>
                <strong>Week 11:</strong> Project Development
              </li>
              <li>
                <strong>Week 12:</strong> Final Project Showcase
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-2xl font-semibold text-primary">
              Course Objectives
            </h2>
            <ul className="mt-4 space-y-2 list-disc list-inside text-lg text-foreground/70">
              <li>Develop problem-solving and logical thinking skills.</li>
              <li>Understand Python syntax and core programming concepts.</li>
              <li>
                Create programs to perform basic computations and automate
                tasks.
              </li>
              <li>
                Gain experience with writing and organizing code effectively.
              </li>
              <li>Complete a capstone project to apply learned skills.</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent p-1 rounded-lg">
          <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300">
            <h2 className="text-2xl font-semibold text-primary">
              Contact Information
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              For any inquiries or further details, feel free to reach out to us
              at <strong>helpmecodeorgs@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button className="text-lg font-bold" asChild>
          <Link href="https://form.jotform.com/242796660471162">
            Register for the Course
          </Link>
        </Button>
      </div>
    </div>
  );
}

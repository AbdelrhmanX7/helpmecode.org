import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const headingtxt =
  "All courses are designed to not only expose simple programming fundamentals to students, but also to gradually help students develop an algorithmic thought process. After attending a class, students will be armed with skills applicable to all facets of life.";

const programsList = [
  {
    title: "Beginner Scratch Class Fall 2025",
    ageRecommendation: "7+",
    Instructors: "Aryan Sahai",
    description:
      "The goal of the beginner course is to give complete beginners a thorough understanding of how computer programming works through Scratch. Participants will learn topics such as conditions, loops, variables, and much more. This course is designed to provide students with the skills necessary to develop an animation project.",
    contactEmail: "helpmecodeorgs@gmail.com",
    infoLink: "/scratch",
    registerLink: "https://form.jotform.com/242796660471162",
    time: "Wednesday 4:00 PM - 5:00 PM PST",
    date: "Beginning March 13th",
    location:
      "Virtual Zoom Classes. Upon registration, all participants will receive a Google Classroom code with all the course info.",
  },
  {
    title: "Python Programming Class Fall 2025",
    ageRecommendation: "10+",
    Instructors: "Aryan Sahai",
    description:
      "This course aims to introduce students to Python programming. Students will learn the fundamentals of Python syntax, including loops, conditionals, and functions. By the end of the course, students will be able to build basic programs and develop problem-solving skills.",
    contactEmail: "helpmecodeorgs@gmail.com",
    infoLink: "/python",
    registerLink: "https://form.jotform.com/242796660471162",
    time: "Thursday 4:00 PM - 5:00 PM PST",
    date: "Beginning March 14th",
    location:
      "Virtual Zoom Classes. Upon registration, all participants will receive a Google Classroom code with all the course info.",
  },
  {
    title: "Java Programming Class Fall 2025",
    ageRecommendation: "12+",
    Instructors: "Aryan Sahai",
    description:
      "In this course, students will learn the basics of Java programming. The class will cover object-oriented programming concepts, including classes, objects, and methods, and will enable students to build foundational programs in Java.",
    contactEmail: "helpmecodeorgs@gmail.com",
    infoLink: "/java",
    registerLink: "https://form.jotform.com/242796660471162",
    time: "Friday 4:00 PM - 5:00 PM PST",
    date: "Beginning March 15th",
    location:
      "Virtual Zoom Classes. Upon registration, all participants will receive a Google Classroom code with all the course info.",
  },
  {
    title: "Introduction to Cybersecurity Fall 2025",
    ageRecommendation: "14+",
    Instructors: "Aryan Sahai",
    description:
      "This introductory course covers the basics of cybersecurity. Students will learn about online safety, digital ethics, and foundational cybersecurity principles, equipping them with the knowledge to stay secure in an increasingly connected world.",
    contactEmail: "helpmecodeorgs@gmail.com",
    infoLink: "/cyber",
    registerLink: "https://form.jotform.com/242796660471162",
    time: "Saturday 10:00 AM - 11:00 AM PST",
    date: "Beginning March 16th",
    location:
      "Virtual Zoom Classes. Upon registration, all participants will receive a Google Classroom code with all the course info.",
  },
];

const ProgramsPage = () => {
  return (
    <div className="mb-16 flex flex-col gap-12 mt-10">
      <div className="px-10 sm:px-16 lg:px-60 text-center">
        <h2 className="text-xl font-semibold">Registration is OPEN!</h2>
        <p className="mt-4 font-medium text-foreground/60">{headingtxt}</p>
      </div>

      <div className="flex flex-col mt-16 gap-2 px-4">
        <p className="text-4xl font-bold">Class Schedule</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programsList.map((program, index) => (
            <div className="bg-accent p-1 rounded-lg" key={index}>
              <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300 text-center flex flex-col gap-8 ">
                <div className="flex flex-col gap-4 text-left">
                  <h2 className="text-2xl font-semibold text-primary">
                    {program.title}
                  </h2>
                  <p className="text-sm font-medium text-foreground/80">
                    Age Recommendation:{" "}
                    <span className="text-primary">
                      {program.ageRecommendation}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-foreground/80">
                    Instructors:{" "}
                    <span className="text-primary">{program.Instructors}</span>
                  </p>
                  <p className="text-foreground/60">{program.description}</p>
                  <p className="text-sm font-medium text-foreground/80">
                    All inquiries can be communicated to{" "}
                    <span className="font-semibold">
                      {program.contactEmail}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-start mt-4 text-left">
                  <div className="flex gap-4">
                    <h3 className="text-sm font-semibold text-foreground/80">
                      Time:
                    </h3>
                    <p className="text-sm text-primary">{program.time}</p>
                    <p className="text-sm text-primary">{program.date}</p>
                  </div>
                  <div className="flex gap-4">
                    <h3 className="text-sm font-semibold text-foreground/80">
                      Location:
                    </h3>
                    <p className="text-sm text-primary">{program.location}</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-between items-center mt-4">
                  <Button className="w-full" asChild>
                    <Link href={program.registerLink}>Register Now</Link>
                  </Button>
                  <Button variant={"outline"} asChild>
                    <Link href={program.infoLink}>View Information</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;

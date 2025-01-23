import React from 'react';
import Link from 'next/link';

// Define a functional component with TypeScript
const PythonInfoPage: React.FC = () => {
  return (
    <div className='mx-auto max-w-3xl p-6'>
      <h1 className='mb-4 text-4xl font-bold text-primary'>
        Python Programming Class Fall 2025
      </h1>

      <p className='mb-4 text-lg'>
        This Python Programming Class is tailored for students aged 10 and up,
        introducing them to the fundamentals of text-based programming. The
        course focuses on developing problem-solving techniques through learning
        Python syntax, loops, conditionals, and basic data handling.
      </p>

      <h2 className='mb-2 text-2xl font-semibold'>Course Details</h2>
      <ul className='mb-4 list-disc pl-5'>
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
          <strong>Location:</strong> Virtual (Zoom). Google Classroom code will
          be shared upon registration.
        </li>
      </ul>

      <h2 className='mb-2 text-2xl font-semibold'>Course Overview</h2>
      <p className='mb-4 text-lg'>
        The Python Programming Class provides students with a solid foundation
        in text-based coding. By the end of the course, students will have
        learned the basics of Python, including loops, functions, conditionals,
        and basic data structures. The focus will be on understanding
        fundamental programming concepts and applying them to solve real-world
        problems.
      </p>

      <h2 className='mb-2 text-2xl font-semibold'>Course Curriculum</h2>
      <ul className='mb-4 list-decimal pl-5'>
        <li>
          <strong>Week 1:</strong> Introduction to Python and Setup - Installing
          Python, setting up the coding environment, and writing your first
          scripts.
        </li>
        <li>
          <strong>Week 2:</strong> Variables, Data Types, and Input -
          Understanding variables, data types (strings, integers, floats), and
          user input.
        </li>
        <li>
          <strong>Week 3:</strong> Conditionals and Decision Making - Learning
          "if", "else", and "elif" statements, and building decision-making
          programs.
        </li>
        <li>
          <strong>Week 4:</strong> Loops (For and While) - Introduction to "for"
          and "while" loops to create repeating actions in programs.
        </li>
        <li>
          <strong>Week 5:</strong> Functions and Code Organization - Defining
          and using functions, passing parameters, and organizing reusable code.
        </li>
        <li>
          <strong>Week 6:</strong> Lists and Basic Data Structures -
          Understanding lists, accessing and modifying elements, and working
          with collections of data.
        </li>
        <li>
          <strong>Week 7:</strong> String Manipulation - Working with strings,
          slicing, and using string methods to modify text.
        </li>
        <li>
          <strong>Week 8:</strong> Error Handling and Debugging - Understanding
          common Python errors, using "try" and "except", and practicing
          debugging techniques.
        </li>
        <li>
          <strong>Week 9:</strong> Dictionaries and Nested Data Structures -
          Learning about key-value pairs with dictionaries and how to work with
          nested data.
        </li>
        <li>
          <strong>Week 10:</strong> File I/O (Input and Output) - Reading and
          writing to text files and building programs to save and retrieve data.
        </li>
        <li>
          <strong>Week 11:</strong> Project Development - Planning and
          developing a final Python project, such as a text-based game or
          calculator.
        </li>
        <li>
          <strong>Week 12:</strong> Final Project Showcase - Completing and
          presenting the final project and discussing learning experiences.
        </li>
      </ul>

      <h2 className='mb-2 text-2xl font-semibold'>Course Objectives</h2>
      <ul className='mb-4 list-disc pl-5'>
        <li>Develop problem-solving and logical thinking skills.</li>
        <li>Understand Python syntax and core programming concepts.</li>
        <li>
          Create programs to perform basic computations and automate tasks.
        </li>
        <li>Gain experience with writing and organizing code effectively.</li>
        <li>Complete a capstone project to apply learned skills.</li>
      </ul>

      <h2 className='mb-2 text-2xl font-semibold'>Contact Information</h2>
      <p className='mb-4 text-lg'>
        For any inquiries or further details, feel free to reach out to us at{' '}
        <strong>contact@mail.com</strong>.
      </p>

      <div className='mt-8'>
        <Link href='https://form.jotform.com/242796660471162' passHref>
          <a className='inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:bg-primary/90'>
            Register for the Course
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PythonInfoPage;

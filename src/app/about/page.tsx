import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-center text-6xl font-extrabold text-white drop-shadow-lg">
          About HelpMeCodeOrg
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl italic">
          Here to Help
        </p>

        {/* Mission Section */}
        <div className="mt-12 rounded-lg bg-white p-8 text-gray-900 shadow-xl">
          <h2 className="text-center text-4xl font-bold text-primary">
            Our Mission
          </h2>
          <img
            src="https://example.com/public/mission.jpg"
            alt="Our Mission"
            className="mt-6 h-auto w-full rounded-xl shadow-md"
          />
          <p className="mt-6 text-lg leading-relaxed">
            At HelpMeCodeOrg, our mission is to bridge the digital divide by
            providing free coding education to underserved communities. Through
            structured programs, mentorship, and hands-on projects, we equip
            students with the technical and problem-solving skills they need to
            thrive in a tech-driven world. Our focus is on teaching everything
            from basic programming to college-level computer science courses,
            including machine learning and web development, ensuring students
            stay up-to-date with the latest technology.
          </p>
        </div>

        {/* History Section */}
        <div className="mt-12 rounded-lg bg-white p-8 text-gray-900 shadow-xl">
          <h2 className="text-center text-4xl font-bold text-primary">
            How We Started
          </h2>
          <img
            src="https://example.com/public/history.jpg"
            alt="Our History"
            className="mt-6 h-auto w-full rounded-xl shadow-md"
          />
          <p className="mt-6 text-lg leading-relaxed">
            HelpMeCodeOrg was established in the Pacific Northwest by technology
            leaders with a passion for sharing their experience and building a
            community of technologists. What started as a small community
            initiative has grown into a nationwide movement, impacting over 200
            students across the country. Our vision is to empower
            underprivileged kids by teaching them computer science, from basic
            concepts to advanced topics like machine learning and AI.
          </p>
        </div>

        {/* Impact Section */}
        <div className="mt-12 rounded-lg bg-white p-8 text-gray-900 shadow-xl">
          <h2 className="text-center text-4xl font-bold text-primary">
            Our Impact
          </h2>
          <img
            src="https://example.com/public/impact.jpg"
            alt="Our Impact"
            className="mt-6 h-auto w-full rounded-xl shadow-md"
          />
          <p className="mt-6 text-lg leading-relaxed">
            We&apos;ve helped students build real-world projects, gain industry
            insights, and connect with professionals in technology fields. From
            web development to AI applications, our students have created
            solutions that make a difference. Our goal is to provide mentorship,
            guidance, and opportunities to help students become the next
            generation of innovative technologists.
          </p>
        </div>

        {/* Future Goals */}
        <div className="mt-12 rounded-lg bg-white p-8 text-gray-900 shadow-xl">
          <h2 className="text-center text-4xl font-bold text-primary">
            Looking Ahead
          </h2>
          <img
            src="https://example.com/public/future.jpg"
            alt="Future Goals"
            className="mt-6 h-auto w-full rounded-xl shadow-md"
          />
          <p className="mt-6 text-lg leading-relaxed">
            We aim to expand our reach, develop new curriculums, and collaborate
            with tech companies to provide more opportunities. The future of
            technology is diverse, and we are committed to ensuring every
            student has a place in it. We want to empower students to build cool
            websites, develop innovative applications, and stay up to date with
            the latest technology trends.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-white drop-shadow-lg">
            Join Us in Making a Difference
          </h3>
          <p className="mt-6 text-lg">
            Whether you&apos;re a student, mentor, or sponsor, there&apos;s a
            place for you at HelpMeCodeOrg.
          </p>
          <Link href="/collaborate" legacyBehavior>
            <a className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-lg font-bold text-primary shadow-md hover:bg-gray-200">
              Collaborate With Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import React from "react";

const headingtxt =
  "At HelpMeCode.org, our mission is to share knowledge and foster a culture of learning by teaching others. We aim to build a strong, supportive community that reaches out to underprivileged students passionate about learning to code. By introducing them to open-source software and developing training programs at no cost, we empower them with the skills and opportunities needed to thrive in the digital world.";

const testimonials = [
  {
    quote:
      "HelpMeCode.org has been a game-changer for my learning journey. Aryan's dedication to teaching and breaking down complex coding concepts has made programming accessible and fun. I never thought I'd understand code, but now I'm building my own projects!",
    writer: "Kasanova Olega, Yakima Valley HighSchool",
  },
  {
    quote:
      "HelpMeCode.org has not only taught me how to code but has shown me the power of collaboration and knowledge-sharing. Aryan's approach to teaching is not just about learning to code; it's about becoming part of a community that learns and grows together.",
    writer: "Cesar Fernandaz, Yakima Valley HighSchool",
  },
  {
    quote:
      "Being from an underprivileged background, I never thought I'd have the chance to learn programming. HelpMeCode.org offered me free resources and training that helped me develop skills in Python and Java. It's amazing to see such dedication to making coding accessible to everyone.",
    writer: "Mario Estrada , Puyallup High School  , Puyallup WA",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MissionPage = () => {
  return (
    <div className="my-16 flex flex-col gap-16 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <motion.div
          className="max-w-full lg:max-w-[512px] text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Our Mission
          </h1>
          <p className="mt-4 text-base lg:text-lg leading-relaxed">
            {headingtxt}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/missionbanner.jpg"
            className="h-auto w-full max-w-[512px] object-cover"
            alt="Mission banner"
          />
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-center text-3xl font-bold text-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Testimonials
        </motion.h2>
        <motion.div
          className="grid grid-auto-fit-xl gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              className="bg-accent p-1 rounded-lg"
              key={testimonial.writer}
            >
              <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300 text-center">
                <p className="mb-4 font-semibold text-foreground/80">{`"${testimonial.quote}"`}</p>
                <p className="text-lg font-semibold text-primary">{`- ${testimonial.writer}`}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MissionPage;

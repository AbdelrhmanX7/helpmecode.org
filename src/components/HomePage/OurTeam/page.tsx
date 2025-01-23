import { motion } from "framer-motion";
import Link from "next/link";

export default function OurTeam() {
  const teamActions = [
    {
      title: "Sign Up for a Program",
      description:
        "Join a variety of completely free classes and start your journey into programming with our engaging lessons tailored for everyone.",
      buttonText: "Sign Up Now",
      href: "/sign-up",
      icon: "📚",
    },
    {
      title: "Volunteer Opportunities",
      description:
        "Become a part of the mission! Lead virtual classes, create content, or help mentor students. Make an impact in the coding community.",
      buttonText: "Learn More",
      href: "https://form.jotform.com/suvinarinc/helpmecodeorg",
      icon: "🤝",
    },
    {
      title: "Make a Donation",
      description:
        "Support free programming education for all. Help us keep our classes running by contributing as a donor or sponsor.",
      buttonText: "Donate Now",
      href: "/donate",
      icon: "💖",
    },
  ];

  return (
    <div className="bg-background">
      <motion.div
        className="relative mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Meet Our Team
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          We are a passionate group of students and volunteers committed to
          making programming accessible to everyone. Join us in creating
          impactful change.
        </p>
        <Link
          href="https://form.jotform.com/suvinarinc/helpmecodeorg"
          className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-opacity-90"
        >
          Join Our Team
        </Link>
      </motion.div>

      <div className="grid gap-8 px-8 py-16 md:grid-cols-3">
        {teamActions.map((action, index) => (
          <motion.div
            key={index}
            className="bg-accent p-1 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300 text-center">
              <div className="text-6xl">{action.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                {action.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {action.description}
              </p>
              <Link
                href={action.href}
                className="mt-4 inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-opacity-90"
              >
                {action.buttonText}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

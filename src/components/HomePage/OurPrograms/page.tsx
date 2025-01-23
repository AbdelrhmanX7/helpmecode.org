import Link from "next/link";
import { motion } from "framer-motion";

export function OurPrograms() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${30 + i * 10}%`,
              height: `${30 + i * 10}%`,
              left: `${-5 - i * 5}%`,
              top: `${50 - i * 10}%`,
              background: `linear-gradient(135deg, rgba(99, 102, 241, ${
                0.2 - i * 0.03
              }), rgba(59, 130, 246, ${0.2 - i * 0.03}))`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-16 sm:px-6 md:flex-row lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-8 md:mb-0 md:w-1/2">
          <motion.h2
            className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Empowering Future Developers
          </motion.h2>
        </div>
        <motion.div
          className="flex flex-col items-center justify-center text-center md:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="mb-6 text-lg text-foreground/70">
            Our courses provide hands-on training in modern programming
            languages like Python, JavaScript, and more. Build your skills and
            create real-world projects.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="/courses"
              className="rounded-full bg-foreground px-6 py-2 font-semibold text-background transition duration-300 hover:bg-opacity-90"
            >
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function WhyOurPlatformWorks() {
  const features = [
    {
      title: "ACCESSIBLE FOR EVERYONE",
      description:
        "Our platform ensures every student, regardless of background, can learn programming skills without barriers.",
    },
    {
      title: "PRACTICAL LEARNING",
      description:
        "Learn through interactive projects and challenges in languages like Python and Java, tailored to real-world needs.",
    },
    {
      title: "COMMUNITY-DRIVEN",
      description:
        "Join a vibrant community of learners and mentors passionate about coding and technology. Share knowledge and grow together.",
    },
  ];

  return (
    <motion.section
      className="bg-background px-4 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.h2
          className="mb-12 text-center text-4xl font-extrabold md:text-5xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Why Choose Our Platform?
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-accent p-1 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="rounded-md h-full bg-card p-6 shadow-sm border duration-300 text-center">
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

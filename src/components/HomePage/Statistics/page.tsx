import { motion } from "framer-motion";

interface StatItemProps {
  emoji: string;
  number: string;
  description: string;
  additionalText?: string;
  customDelay: number;
}

const StatItem = ({
  emoji,
  number,
  description,
  additionalText,
  customDelay,
}: StatItemProps) => (
  <motion.div
    className="flex flex-col items-center justify-start gap-6 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: customDelay }}
    viewport={{ once: true }}
  >
    <span className="text-8xl">{emoji}</span>
    <h2 className="text-5xl font-extrabold">{number}</h2>
    <p className="w-80 text-lg font-semibold uppercase text-primary">
      {description}
    </p>
    {additionalText && (
      <p className="w-80 text-sm text-foreground/80">{additionalText}</p>
    )}
  </motion.div>
);

export default function Statistics() {
  return (
    <motion.section
      className="bg-background px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="mx-auto max-w-7xl text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight">
          Our Impact at a Glance
        </h1>
        <div className="flex flex-wrap justify-center gap-16 md:flex-row">
          <StatItem
            emoji="🌎"
            number="20+"
            description="Cities Worldwide"
            additionalText="Our programs have reached diverse communities across the globe, building a better future."
            customDelay={0}
          />
          <StatItem
            emoji="😊"
            number="10+"
            description="Dedicated Volunteers"
            additionalText="A passionate team working tirelessly to bring positive changes in their communities."
            customDelay={0.2}
          />
          <StatItem
            emoji="💪"
            number="300+"
            description="Students Empowered"
            additionalText="Educating and mentoring students since March 2020 to unlock their true potential."
            customDelay={0.4}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

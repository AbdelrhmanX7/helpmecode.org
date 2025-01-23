import { motion } from "framer-motion";
import Link from "next/link";

export default function SuggestionSection() {
  return (
    <motion.div
      className="relative bg-background px-4 py-16 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur-2xl"></div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="mb-8 text-4xl font-bold md:text-5xl">
          Send us a suggestion!
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Have ideas to make our platform better? We’d love to hear from you.
          Share your thoughts and suggestions with us!
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <Link
            href="/suggestion-form"
            className="rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-opacity-90"
          >
            Suggestion Form
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

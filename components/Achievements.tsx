
"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <h2 className="heading">
        Milestones &{" "}
        <span className="text-purple">
          Achievements
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {achievements.map((item, index) => (
          <motion.div
            key={item.description}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-3xl border border-white/[0.12] bg-[#10132E] p-8"
          >
            <div className="mb-5 text-3xl">
              🏆
            </div>

            <h3 className="text-xl font-bold text-white">
              {item.name}
            </h3>

            <p className="mt-3 text-white-100">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

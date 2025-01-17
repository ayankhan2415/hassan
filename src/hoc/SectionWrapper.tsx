"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils";

const StarWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`padding max-w-7xl mx-auto relative z-0`}
      >
        <span id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

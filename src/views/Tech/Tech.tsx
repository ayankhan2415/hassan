"use client";
import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/hoc";
import { technologies, textVariant } from "@/utils";
import type { Metadata } from "next";
import Lottie from "react-lottie";
import animationData from "@/assets/lottie/webSkills.json";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "HTML, CSS, SASS , Docker , TS, Typescript , JS , javaScript , Next.js , React.js mySql , Postgress, Node.js , firebase , monogodb",
};

const Tech = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <motion.div variants={textVariant(0)} className="sm:hidden">
        <h2 className={`sectionHeadText mb-20`}>My Skills</h2>
      </motion.div>
      <div className="sm:hidden flex flex-col mt-5 justify-center items-center">
        <Lottie options={defaultOptions} />
      </div>
      <div className="hidden sm:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

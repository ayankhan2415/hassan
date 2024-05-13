"use client";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
// import Image from "next/image";

// import {
//   VerticalTimeline, VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { ExperienceCard } from "@/components/ExperianceCard";
import { motion } from "framer-motion";
import { experiences, textVariant } from "@/utils";
import { SectionWrapper } from "@/hoc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "MERN Stack Developer , Next.js , React.js mySql , Postgress Node.js",
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`sectionSubText text-center mb-2`}>
          What I have done so far
        </p>
        <h2 className={`sectionHeadText text-center`}>Work Experience.</h2>
      </motion.div>
     
    </>
  );
};

export default SectionWrapper(Experience, "work");

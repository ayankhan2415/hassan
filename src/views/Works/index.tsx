"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { projects, fadeIn, textVariant } from "@/utils";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`sectionSubText mb-2`}>My work</p>
        <h2 className={`sectionHeadText`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="flex mt-10 justify-center align-middle sectionSubText hover:underline"
      >
        See All
      </Link>
    </>
  );
};

export default SectionWrapper(Works, "works");

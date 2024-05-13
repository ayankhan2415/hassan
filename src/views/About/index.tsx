/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services, fadeIn, textVariant } from "@/utils";
import { SectionWrapper } from "@/hoc";

export const metadata: Metadata = {
  title: "About",
  description:
    "Experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Next.js.",
};

const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className="sectionSubText mb-2">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Next.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 xs:justify-center">
        {services.map((service: any, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

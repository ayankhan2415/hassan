"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "@/assets";
import { AiOutlineEye } from "react-icons/ai";
import { fadeIn } from "@/utils";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  url_link,
}: any) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full max-h-[250px] h-[250px]">
          <Image
            src={image}
            alt="project_image"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-1 flex justify-between m-3">
            <div
              onClick={() => window.open(url_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <AiOutlineEye />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;

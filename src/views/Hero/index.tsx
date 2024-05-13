/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ComputersCanvas } from "@/components/canvas";
import Lottie from "react-lottie";
import animationData from "@/assets/lottie/web2.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 680px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="relative z-0">
      <div
        className="bg-cover bg-no-repeat bg-center"
      >
        <section className={`relative w-full h-screen mx-auto`}>
          <div
            className={
              "paddingX absolute inset-0 top-[120px]  max-w-7xl mx-auto  flex flex-row items-start gap-5"
            }
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div className="flex flex-col">
              <h1 className={`heroHeadText text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Hassan</span>
              </h1>
              <p className={`heroSubText mt-2 text-white-100`}>
                I'm a &nbsp;
                <span className="font-bold">
                  <Typewriter
                    words={[
                      "Software Engineer",
                      "JS Full Stack developer",
                      "React.js Developer",
                      "Next.js Developer",
                      "Nest.js Developer"
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
              <Link
                href={"/src/assets/HassanRemote.pdf"}
                download="Hassan's Resume"
                target="_blank"
                className="mt-5 z-50"
              >
                <button>Download CV</button>
              </Link>
              {isMobile && (
                <div className="flex flex-col mt-5 justify-center items-center">
                  <Lottie options={defaultOptions} />
                </div>
              )}
            </div>
          </div>

          {!isMobile && <ComputersCanvas />}
          <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceCard from "./ExperienceCard";
import { motion, useScroll } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

const Experience = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 960px)');

  const { ref } = useSectionInView("Experience", 0.3);
  const cardRef = useRef();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["2 8", "0.5 1"],
  });

  return (
    <section
      ref={ref}
      id="experience"
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden pt-20 lg:pt-32"
    >
      <SectionHeading title={"Experience 💼"} />
      <div className=" bg-opacity-20 -z-10 absolute top-[45%] md:top-[50%] lg:top-[45%] left-1/2 -translate-x-[50%] -translate-y-[50%] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] lg:w-[68.75rem] bg-[#E8CBC0]">
        <div className="bg-opacity-20 -z-10 absolute  h-[31.25rem] w-[50rem] rounded-full blur-[10rem] lg:w-[68.75rem]  bg-[#636FA4]"></div>
      </div>

      <motion.div
        ref={cardRef}
        style={{
          scale: isDesktopOrLaptop && scrollYProgress,
          opacity: isDesktopOrLaptop ? scrollYProgress : 1,
        }}
        className="w-[90vw] md:w-[90vw] lg:w-[80vw] h-full px-5 py-8 lg:px-20 lg:py-20 bg-zinc-900 lg:bg-zinc-950 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-opacity-80 lg:bg-opacity-75 flex flex-col gap-10 lg:gap-36 mt-10 lg:mt-20 rounded-[10vw] sm:rounded-[5vw]"
      >
        {experiencesData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;

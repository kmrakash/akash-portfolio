"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SkillCircle from "./SkillCircle";
import useMediaQuery from "@/hooks/useMediaQuery";

const getRandomAngle = () => {
  return Math.floor(Math.random() * 360);
};

const Skills = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 960px)");

  const { ref } = useSectionInView("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const [gradientAngles, setGradientAngles] = useState([]);

  useEffect(() => {
    const angles = skillsData.map(() => getRandomAngle());
    setGradientAngles(angles);
  }, []);

  return (
    <section
      ref={ref}
      id="skills"
      className="w-full px-10 lg:px-20 text-center pt-20 lg:pt-32"
    >
      <SectionHeading title="Skills 🥷🏼" />
      <div className="grid md:grid-cols-5 lg:grid-cols-7 grid-cols-3 self-center items-stretch gap-x-5 gap-y-5 lg:gap-x-10 lg:gap-y-10 w-full pt-16 lg:py-20">
        {skillsData.map((item, index) => (
          <SkillCircle
            key={index}
            variants={fadeInAnimationVariants}
            initial={fadeInAnimationVariants.initial}
            whileInView={fadeInAnimationVariants.animate}
            pa
            index={index}
            item={item}
            gradientAngles={gradientAngles}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

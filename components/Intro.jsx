"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import SocialLinksContainer from "./SocialLinksContainer";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="w-full h-screen text-center flex flex-col justify-center items-center"
      id="home"
    >
      <div className="flex flex-col gap-1 items-center">
        {/* Mobile profile photo */}
        <div className="lg:hidden">
          <motion.div
            className="relative w-[5rem] h-[5rem] mb-5 flex items-center justify-center"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "5rem", opacity: 1 }}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <Image
              src={"/akash.png"} // TODO change to your profile foto
              alt="photo"
              quality={95}
              loading="lazy"
              width={100}
              height={100}
              className="rounded-full border-4 object-cover shadow-xl"
            />
          </motion.div>
        </div>
        {/* Mobile profile photo */}

        <motion.h1
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl md:text-3xl lg:text-5xl font-medium"
        >
          Hello{" "}
          <motion.span
            variants={{
              initial: { rotate: 0 },
              animate: {
                rotate: [0, 14, -8, 14, -4, 10, 0],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                },
              },
            }}
            initial="initial"
            animate="animate"
            className="inline-block"
            style={{ display: "inline-block", transformOrigin: "70% 70%" }}
          >
            👋🏼
          </motion.span>
          , I&apos;m
        </motion.h1>
        <div className="flex items-center gap-5 sm:my-2">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex relative"
          >
            <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold">
              Akash Kumar
            </h1>
            <div className="w-5 h-5 lg:w-9 lg:h-9 absolute -top-[0.5rem] -left-[0.5rem]  lg:-top-[2rem] lg:-left-[0.5rem] rotate-12 flex justify-center items-center">
              <Image
                src={"/decorative-lines.svg"}
                alt="decorative-lines"
                width={100}
                property="true"
                height={100}
              />
            </div>
          </motion.div>
          <div className="lg:flex items-center justify-center hidden">
            <motion.div
              className="relative w-[6rem] h-[6rem] flex items-center justify-center"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1 }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <Image
                src={"/akash.png"} // TODO change to your profile foto
                alt="photo"
                quality={95}
                property="true"
                width={100}
                height={100}
                className="rounded-full border-4 object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        <motion.h1
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:text-3xl lg:text-5xl font-medium"
        >
          A Skilled FullStack Developer
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col items-center gap-4 justify-center px-4 text-lg font-medium mt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex items-center flex-col lg:flex-row gap-3 text-sm lg:text-lg">
          <Link
            href={"#contact"}
            onClick={() => {
              setActiveSection("Let's talk");
              setTimeOfLastClick(Date.now());
            }}
            className="border border-zinc-500 outline-none text-gray-50 py-3 px-7 flex items-center gap-2 rounded-full hover:scale-[1.05] hover:bg-zinc-950 active:scale-105 transition group"
          >
            Hire me
            <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition" />
          </Link>

          <a
            href="https://docs.google.com/document/d/1UzwMv0rYWlNfoUzbMQOgMPrudD1JTcR418tCqllyBrY/export?format=pdf"
            download
            className="flex w-fit items-center gap-2  px-7 py-3 rounded-full outline-none hover:scale-[1.05] active:scale-105 transition group cursor-pointer border border-black/10 bg-white/10"
          >
            Download CV{" "}
            <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
          </a>
        </div>

        <SocialLinksContainer className="flex items-center gap-3" />
      </motion.div>
    </section>
  );
};

export default Intro;

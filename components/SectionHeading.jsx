import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";


const SectionHeading = ({ title, ...property }) => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 960px)');
  
  return (
    <div className={`flex w-full justify-center ${property.className}`}>
      <div className="w-fit relative">
        <motion.h2
          initial={{
            opacity: isDesktopOrLaptop ? 0 : 1,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          viewport={{
            once: true,
          }}
          className="text-2xl lg:text-4xl font-semibold text-zinc-100 capitalize text-center"
        >
          {title}{" "}
        </motion.h2>
        <div className="w-6 h-6 absolute -top-[0.8rem] -left-[1rem] flex items-center justify-center">
          <Image
            src={"/decorative-lines.svg"}
            alt="decorative-lines"
            loading="lazy"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;

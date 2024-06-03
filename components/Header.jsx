"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ setIsFullNavbar }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const openNavbar = () => {
    setIsFullNavbar(true);
  };
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-[999] fixed top-0 w-full bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] px-4 lg:px-20 py-2 sm:py-1"
    >
      <nav className="flex flex-row w-full py-2 lg:top-[1.7rem] lg:py-0 items-center justify-between">
        <div className="w-[2.5rem] h-[2.5rem] lg:w-[3.875rem] lg:h-[5.375rem]  relative flex-shrink-0 flex justify-center items-center">
          {/* <Image alt="logo" src={"/logo.svg"} width={100} height={100} /> */}
        </div>
        <div onClick={openNavbar} className="hamburger lg:hidden text-xl">
          <RxHamburgerMenu />
        </div>
        <ul className="lg:flex hidden flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 lg:w-[initial] lg:flex-nowrap lg:gap-5">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex items-center w-full px-3 py-3 transition justify-center text-gray-500  hover:text-gray-300",
                  {
                    "!text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute bottom-2 -z-10 border-b w-3/12 text-center border-neutral-200"
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;

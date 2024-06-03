import useClickOutside from "@/hooks/ClickOutside";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import clsx from "clsx";

export default function FullScreenNavbar({
  alwaysOpen,
  isFullNavbar,
  setIsFullNavbar,
  ...property
}) {
  const dialogRef = useRef(null);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const closeModal = () => {
    setIsFullNavbar(false);
    document.body.style.overflow = "visible";
  };
  useClickOutside(dialogRef, (e) => closeModal(e));
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      className={`fixed z-[9999] inset-0`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex justify-center h-full w-full items-end md:items-center text-center md:max-w-1/2 m-auto">
        <div
          className="fixed inset-0 bg-opacity-50 transition-opacity"
          aria-hidden="true"
        ></div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100vh", opacity: 1 }}
          transition={{ ease: "linear", duration: 0.2 }}
          ref={dialogRef}
          className={`w-full h-screen flex flex-col bg-zinc-900 items-center z-10 relative p-5`}
        >
          <div className="w-full flex justify-end items-center pt-20">
            <span
              onClick={closeModal}
              className="bg-zinc-950 w-10 h-10 text-zinc-300  rounded-full flex justify-center items-center text-2xl"
            >
              <IoClose />
            </span>
          </div>
          <div className="h-full w-full pt-10">
            <ul className="flex flex-col items-center justify-center gap-y-7 text-xl  text-gray-500">
              {links.map((link) => (
                <li
                  className="flex items-center justify-center relative"
                  key={link.hash}
                >
                  <Link
                    className={clsx(
                      "flex items-center w-full transition justify-center ",
                      {
                        "!text-gray-200 font-semibold":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      closeModal();
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

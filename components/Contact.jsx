"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import SocialLinksContainer from "./SocialLinksContainer";
import { useState } from "react";

const Contact = () => {
  const { ref } = useSectionInView("Let's talk", 0.5);
  const [onValue, setOnValue] = useState({
    senderEmail: "",
    senderMessage: "",
  });
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center py-20 lg:py-32 w-full px-10 lg:px-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading title={"Let's talk ✉️"} />

      <div className="bg-opacity-20 -z-10 absolute -bottom-20 sm:right-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] lg:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-20rem] 2xl:right:[-5rem] bg-[#636FA4]"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 lg:gap-36 w-full lg:py-20 py-10 h-full">
        <div>
          <p className="mt-3 text-white/80 lg:text-base text-sm">
            Please contact me directly at{" "}
            <a
              className="hover:text-zinc-400 transition-all underline font-medium"
              href="mailto:aksh.iem22@gmail.com"
            >
              {" "}
              aksh.iem22@gmail.com{" "}
            </a>{" "}
            or through this form.
          </p>
          <form
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Email sent succesfully");
              formData.get("senderEmail");
              setOnValue({ senderEmail: "", senderMessage: "" });
            }}
            className="mt-5 mb-10 sb:mb-0 flex flex-col text-black/80"
          >
            <input
              className="h-14 rounded-lg px-4 text-zinc-200 bg-zinc-800 bg-opacity-80 focus:bg-zinc-900 border border-transparent focus:border-zinc-700 transition-all outline-none"
              type="email"
              name="senderEmail"
              value={onValue?.senderEmail}
              required
              onChange={(e) =>
                setOnValue((prev) => ({ ...prev, senderEmail: e.target.value }))
              }
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="h-52 my-3 rounded-lg p-4 text-zinc-200 bg-zinc-800 bg-opacity-80 focus:bg-zinc-900 border border-transparent focus:border-zinc-700 transition-all outline-none"
              name="senderMessage"
              value={onValue?.senderMessage}
              placeholder="Your message"
              onChange={(e) =>
                setOnValue((prev) => ({
                  ...prev,
                  senderMessage: e.target.value,
                }))
              }
              required
              maxLength={5000}
            />
            <SubmitButton />
          </form>
        </div>

        <div className="">
          <h3 className="text-xl lg:text-4xl">
            Do you have any <span className="font-semibold"> Questions, </span>{" "}
            <br />{" "}
            <span className="font-semibold">suggestions or feedback.</span>{" "}
            <br /> I would love to hear from you.
          </h3>
          <SocialLinksContainer className="flex mt-5 w-full justify-center gap-3" />
        </div>
      </div>

      <footer className="mb-10 px-4 text-center text-zinc-500 absolute bottom-0 left-0  w-screen">
        <small className="mb-2 block text-sm">
          &copy; Akash. All rights reserved.
        </small>
        <p className="text-sm">
          <span className="font-semibold">This website is built using:</span>{" "}
          Next.js, JavaScript, Tailwind CSS, Framer Motion and Resend.
        </p>
      </footer>
    </motion.section>
  );
};

export default Contact;

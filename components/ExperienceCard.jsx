import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ExperienceCard = ({ item, ...property }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 w-full">
      <div className="lg:w-[40vw]">
        <h2 className="text-2xl group lg:text-4xl w-fit font-semibold underline cursor-pointer lg:hover:text-zinc-300 transition-all text-zinc-300 lg:text-zinc-400">
          <a
            href={item.href}
            target="_blank"
            className="w-fit flex items-end gap-0.5"
          >
            {item.company}
            <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all rotate-[40deg]">
              <IoIosArrowRoundUp />
            </span>
          </a>
        </h2>

        <h2 className="text-xl lg:text-2xl font-medium text-zinc-400 mt-1 lg:mt-3">
          {item.profile}
        </h2>
        <h2 className="text-sm lg:text-base font-medium text-zinc-400">
          {item.duration}
        </h2>
      </div>
      <div className="lg:w-[60vw] text-base">
        <p className="text-sm text-zinc-400 lg:text-white lg:tracking-wide lg:text-base lg:leading-relaxed mb-3">
          {item?.tagline}
        </p>
        <ul className="text-xs lg:text-base list-disc text-zinc-400 lg:text-white list-inside lg:tracking-wide lg:leading-relaxed flex flex-col gap-2 lg:gap-3">
          {item?.list.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;

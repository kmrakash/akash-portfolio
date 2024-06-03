import { socialLinks } from "@/lib/data";
import React from "react";

const SocialLinksContainer = ({...property}) => {
  return (
    <div className={` ${property.className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          target="_blank"
          href={social.href}
          className="flex items-center gap-2 p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition group cursor-pointer border border-black/10 bg-white/10 text-white/60"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinksContainer;

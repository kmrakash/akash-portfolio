"use client";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import ShowcaseCard from "./ShowcaseCard";
import { showcase } from "@/lib/data";

const Showcase = () => {
  const { ref } = useSectionInView("Showcase", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen z-10 w-full px-10 lg:px-20 relative overflow-hidden pt-20 lg:pt-32"
    >
      <div className=" bg-opacity-5 -z-10 absolute top-[20%] right-[-40rem] h-[40rem] w-[40rem] rounded-full blur-[10rem] lg:w-[68.75rem] bg-[#E8CBC0]">
        <div className="bg-opacity-10 -z-10 absolute top-[-1rem] left-[-35rem] h-[40rem] w-[50rem] rounded-full blur-[10rem] lg:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left:[-5rem] bg-[#636FA4]"></div>
      </div>
      <SectionHeading title={"Showcase 🖼️"} />
      <div className="mt-5 lg:mt-10">
        {showcase.map((item, index) => (
          <ShowcaseCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;

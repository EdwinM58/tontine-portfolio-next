import React from "react";
import Link from "next/link";

const Hero = ({ section }: HeroProps) => {
  return (
    <div className="flex bg-green-400 h-[800px] w-screen relative ">
      <div className="p-10 sm:p-20 flex flex-col ">
        <p>{section.subheading}</p>
        <h1 className="text-6xl font-bold">{section.heading}</h1>
        <p>{section.subtext}</p>
      </div>
      <Link
        href={"myprojects"}
        className="absolute border-2 rounded-md p-2 m-12 bg-blue-200 h-12 bottom-0 right-0 flex justify-center items-center"
      >
        {section.calltoaction}
      </Link>
    </div>
  );
};

export default Hero;

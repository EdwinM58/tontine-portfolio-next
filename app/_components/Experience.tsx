import React from "react";

const Experience = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center p-4 text-6xl font-bold">
        Experience .
      </h1>
      <div className="flex flex-col justify-center md:flex-wrap items-center md:flex md:flex-row lg:justify-between p-12">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export const ExperienceCard = () => {
  return (
    <div className=" bg-blue-500 flex flex-col max-w-full w-96 h-[500px] m-8">
      <div className="bg-orange-500 max-w-full h-40 relative">Image</div>
      <h1>Job</h1>
      <p>Description</p>
    </div>
  );
};

export default Experience;

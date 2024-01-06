import Link from "next/link";
import React from "react";

const Explore = () => {
  return (
    <div>
      <h1 className="px-2 text-4xl flex justify-center items-center">
        Explore My Projects .
      </h1>

      <div className=" flex flex-col xl:flex xl:flex-row items-center justify-center md:justify-between p-20">
        <div className="flex flex-col items-end mt-8 gap-y-8 order-2 xl:order-1">
          <p>
            Lorem ipsum dolor sit amet,unt ut labore et dolor <br />
            consectetur adipiscore et dolorz do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            href={"myprojects"}
            className="bg-blue-400 rounded-md p-2 w-32 flex items-center justify-center"
          >
            Take a look
          </Link>
        </div>

        <div className="h-96 w-[700px] bg-black order-1 xl:order-1 ">
          Preview Image
        </div>
      </div>
    </div>
  );
};

export default Explore;

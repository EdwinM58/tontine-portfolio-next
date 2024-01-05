import Link from "next/link";

const MyProjectsPage = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-8 justify-between px-8 sm:px-32 py-16">
        <h1 className="text-6xl font-bold">My Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur incididunt ut labore et um
          <br />
          dolor sit amet, consectetur incididunt ut labore et
        </p>
      </div>

      <div className="mb-24">
        <div className="flex flex-col xl:flex-row justify-between ">
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex flex-col xl:flex-row justify-between ">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-y-2 mx-auto max-w-full">
      <div className="max-w-full flex-col md:flex-row bg-purple-300 flex mt-8 w-full md:w-[450px] m-8 h-96 justify-between">
        <div className="flex">Image</div>
        <div className="flex flex-col p-2 bg-green-400">
          <h1 className="font-bold">Project Title</h1>
          <p>Description</p>
          <p>Stack</p>
        </div>
      </div>
      <div className="flex justify-center border-2 w-16 rounded-3xl -mt-6 ">
        <Link href={"https://github.com/"}>github</Link>
      </div>
    </div>
  );
};

export default MyProjectsPage;

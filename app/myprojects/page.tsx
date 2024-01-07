import Link from "next/link";
import Image from "next/image";
import projects from "../db.json";

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

      <div className="flex flex-wrap justify-center">
        {projects.map((e, i) => (
          <ProjectCard
            key={e.id}
            title={e.title}
            description={e.description}
            imgUrl={e.image}
            stack={e.stack}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  imgUrl,
  stack,
}: ProjectCardProps) => {
  return (
    <div className="p-6 flex flex-col gap-y-2 mx-auto max-w-full rounded-md drop-shadow-lg">
      <div className="max-w-full flex-col md:flex-row rounded-md bg-gray-300 flex mt-8 md:w-[450px] h-96 justify-between">
        <div className="relative flex flex-col p-4 rounded-md drop-shadow-md space-y-4 ">
          <div className="flex justify-center ">
            <Image
              src={imgUrl}
              alt="project"
              width={250}
              height={200}
              className="rounded-md "
            />
          </div>

          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <div className="relative flex space-x-4 justify-end">
            {stack.map((e) => (
              <p className="font-bold" key={e}>
                * {e}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center border-2 w-16 rounded-3xl">
        <Link href={"https://github.com/"}>github</Link>
      </div>
    </div>
  );
};

export default MyProjectsPage;

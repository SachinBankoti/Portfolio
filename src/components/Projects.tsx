"use client";
import { headerItems, userInfo, projects } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section
      id={headerItems.projects.page}
      className="h-full flex flex-col text-center justify-center items-center mt-24 mb-96 lg:my-48 md:my-44"
    >
      <h1 className={"text-5xl"}>Projects</h1>

      <div className="flex justify-center items-center text-center break-words flex-wrap mt-1">
        {Object.keys(projects).map((project) => (
          <span
            key={project}
            className={"mt-4 p-2 rounded-md inline-block text-sm"}
          >
            <ul>
              <li>{projects[project as keyof Projects].name}</li>
              <li>{projects[project as keyof Projects].description}</li>
              <li>
                <Link
                  href={projects[project as keyof Projects].link}
                  target="_blank"
                >
                  <button className=" bg-slate-50 ">
                    {projects[project as keyof Projects].link}
                  </button>
                </Link>
              </li>
            </ul>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Projects;

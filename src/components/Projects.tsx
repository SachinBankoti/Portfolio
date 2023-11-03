"use client";
import { headerItems, userInfo, projects } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section
      id={headerItems.projects.page}
      className="h-screen flex flex-col text-center justify-center items-center my-40"
    >
      <h1 className={"text-6xl my-6"}>Projects</h1>

      <div className="flex justify-center items-center text-center break-words flex-wrap mt-3">
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
        <a href="/Resume.docx" type="__blank">DownloadCV</a>
      </div>
    </section>
  );
};

export default Projects;

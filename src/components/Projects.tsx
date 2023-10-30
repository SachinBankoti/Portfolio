"use client";
import { headerItems, userInfo,projects } from "@/constants/constants";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <section
      id={headerItems.projects.page}
      className="h-screen flex flex-col text-center justify-center items-center my-40"
    >
        <h1 className={"text-6xl my-6"}>Projects</h1>
       
      <div className="flex justify-center items-center text-center break-words flex-wrap mt-3">  
          {
                        Object.keys(projects).map(project => (
                            <span key={project} className={"mt-4 p-2 rounded-md inline-block text-sm"}>{projects[project as keyof Projects].image}</span>
                        ))
                    }
        </div>
    </section>
  );
};

export default Projects;

"use client";
import { headerItems, userInfo } from "@/constants/constants";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Intro: React.FC = () => {
  return (
    <section
      id={headerItems.home.page}
      className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div>
        <Image
          src={userInfo.picture}
          alt="profilepic"
          width={280}
          height={280}
          className="rounded-full shadow-2xl mt-10"
        />
      </div>
      <div className="md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className=" text-7xl uppercase hidden md:block">
          Software Engineer
        </h1>
        <h1 className="text-2xl mt-5 md:3xl ">
          Hi I&#39; m{" "}
          <span className="text-red-600 text-3xl md:text-4xl">
            {userInfo.name}
          </span>
        </h1>
        <p
          className="mt-4 mb-4"
          dangerouslySetInnerHTML={{ __html: userInfo.heading }}
        />
        <ScrollLink
          to={headerItems.projects.page}
          className="bg-teal-600 flex items-center justify-center cursor-pointer w-28 h-10 rounded text-neutral-100"
        >
          Projects
        </ScrollLink>
      </div>
    </section>
  );
};

export default Intro;

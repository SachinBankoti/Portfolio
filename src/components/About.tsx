"use client";
import { headerItems, userInfo } from "@/constants/constants";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id={headerItems.about.page}
      className="lg:h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div className={"m-4 md:ml-20 sm:ml-12 md:w-1/2"}>
        <h1 className={"text-5xl my-6"}>About</h1>
        <h2 className={"text-3xl my-4"}>Get to know me!</h2>
        <p className={"[&>p]:mt-3 text-xs"}>{userInfo.about}</p>
        </div>
      <div className="flex flex-col justify-center items-center text-center md lg:mt-36">
        <Image
          src={userInfo.picture}
          alt="AboutPic"
          width={250}
          height={200}
          className={"m-auto"}
        />
        <div className="break-words w-3/4 mt-3">
          {
                        userInfo.skills.map(skill => (
                            <span key={skill} className={"bg-gray-200 m-1 p-2 rounded-md inline-block text-sm"}>{skill}</span>
                        ))
                    }
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

const Main: React.FC = () => {
  return (
    <div className={"lg:mx-32 md:mx-4 mt-12 sm-mt-24"}>
      <Intro />
      <About />
      <Projects />
    </div>
  );
};

export default Main;

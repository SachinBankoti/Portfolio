"use client"
import About from "@/components/About";
import Intro from "@/components/Intro";

const Main: React.FC = () => {
  return (
    <div className={"lg:mx-32 md:mx-4"}>
      <Intro />
      <div>
        <About />
      </div>
    </div>
  );
};

export default Main;

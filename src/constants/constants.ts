import { UserObject } from "@/models/User";
import { NavItems } from "@/models/Header";

export const userInfo: UserObject = {
  name: "Sachin Bankoti",
  picture: "/my-image.png",
  title: "Software Engineer/Developer",
  heading:
    "I&#39;m a Software Engineer based in Canada, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.",
  about: `
        I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for more then 5 years.
        My journey in IT began in 2018 since then, I've had the privilege to work on a diverse range of projects in various domains which includes E-commerce,Logistics,Engineering,Banking etc, allowing me to refine my skills and approach to problem-solving.
        Along the way I upgraded my skills and worked on ExpressJS and databases like MongoDB and SQL to become a Full Stack MERN Engineer.
         I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts.
     I can’t wait to put my abilities to work alongside a group of enthusiastic Engineers to build incredible websites that have a good influence on people’s lives.
        `,
  skills: [
    "ReactJS",
    "NextJS",
    "Javascript",
    "Typescript",
    "NodeJS",
    "ExpressJS",
    "VueJS",
    "npm",
    "Redux",
    "AWS",
    "MongoDB",
    "MySQL",
    "HTML5",
    "CSS3",
    "MaterialUI",
    "TailwindCSS",
    "Bootstrap",
  ],
};

export const headerItems: NavItems = {
  home: { label: "Home", page: "home" },
  about: { label: "About", page: "about" },
  projects: { label: "Projects", page: "projects" },
};
export const projects = {
  flipkart: {
    name: "E-commerce App",
    description: "E-commerce website using MERN stack and Redux",
    link: "https://github.com/SachinBankoti/Flipkart_Ecom",
  },
  gmail: {
    name: "Gmail",
    description: "Gmail clone using MERN stack",
    link: "https://github.com/SachinBankoti/GmailClone",
  },
  Blog: {
    name: "Blog Applcation",
    description: "Blog Application with MERN stack and JWT authentication",
    link: "https://github.com/SachinBankoti/Blog-Project",
  },
  inShorts: {
    name: "InShots Clone",
    description: "News application",
    link: "https://github.com/SachinBankoti/inshotClone",
  },
  ShoppingCart: {
    name: "Shopping App",
    description: "Using advanced arary methods and React",
    link: "https://github.com/SachinBankoti/shoppingCart",
  },
  Portfolio: {
    name: "Portfolio",
    description: "Using NextJS,Typescript and TailwindCSS",
    link: "https://github.com/SachinBankoti/Portfolio",
  },
  JobListing: {
    name: "Job Listing App",
    description: "MERN stack with AWS EC2",
    link: "https://github.com/SachinBankoti/joblisting",
  },
  JobListServer: {
    name: "List AWS",
    description: "Job list application with EC2 and Putty",
    link: "https://github.com/SachinBankoti/jobListing_aws",
  },
};

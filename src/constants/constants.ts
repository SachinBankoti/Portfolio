import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"


export const userInfo: UserObject = {
    name: 'Code for Interview',
    picture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
    heading: 'I&#39;m a Software Engineer based in Canada, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 5 years.
        My journey in IT began in 2019 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.
         I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts.
        `,
    skills: ['React', 'Next', 'Data Structure', 'Typescript', 'Spring Boot', 'Hibernate', 'AWS', 'MongoDB', 'MySQL', 'HTML', 'CSS'],   
}

export const headerItems:NavItems = {
    home: { label: 'Home', page: 'home'},
    about: { label: 'About', page:'about'},
    projects: { label: 'Projects', page:'projects'},
}
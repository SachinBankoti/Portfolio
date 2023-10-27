import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"


export const userInfo: UserObject = {
    name: 'Sachin',
    picture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
}

export const headerItems:NavItems = {
    home: { label: 'Home', page: 'home'},
    about: { label: 'About', page:'about'},
    projects: { label: 'Projects', page:'projects'},
}
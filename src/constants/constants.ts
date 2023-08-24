import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"


export const userInfo: UserObject = {
    name: 'Sachin Bankoti',
}

export const headerItems:NavItems = {
    home: { label: 'Home', page: 'home'},
    about: { label: 'About', page:'about'},
    projects: { label: 'Projects', page:'projects'},
}
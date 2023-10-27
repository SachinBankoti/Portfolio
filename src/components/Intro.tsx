import { headerItems, userInfo } from "@/constants/constants";
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <section id={headerItems.home.page} className="h-screen flex text-center justify-center items-center">
        <div>
            <Image 
                src={userInfo.picture}
                alt="profilepic"
                width={300}
                height={300}
            />
        </div>
        <div>
           <h1 className="text-7xl uppercase">Software Developer</h1> 
           <h1>Hi I&#39; m <span>{userInfo.name}</span></h1> 
        </div>

    </section>
  )
}

export default Intro
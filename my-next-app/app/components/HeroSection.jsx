import hero from "@/app/assets/Images/hero.png";
import heromobile from "@/app/assets/Images/heromobile.png";
import Image from "next/image";
import Burger from "./Burger";
import ChangeLangButton from "./ChangeLangButton";

export default function HeroSection() {
  return (
    <>
      <div className="block container mx-auto py-10">
        <div className="flex justify-between py-7">
          <div className="hidden md:flex justify-between py-7 w-full">
          <p className="text-7xl">
            Ibrohim
            <br />
            Rajabmurodov
          </p>
          <p className="text-xl flex items-end">
            Frontend developer
            <br />
            16 years old, Dushanbe
          </p>
          <ChangeLangButton></ChangeLangButton>
         </div>
          <div className="flex flex-col gap-5 pl-5 md:hidden">
          <p className="text-7xl">
            Ibrohim
            <br />
            Rajabmurodov
          </p>
          <p className="text-xl flex items-end">
            Frontend developer
            <br />
            16 years old, Dushanbe
            </p>
            <Image
            className=" justify-center flex items-center md:hidden"
            src={heromobile}
            alt="error"
            ></Image>   
          </div>
          <div className="w-fit pr-5 md:hidden">
            <Burger button={true}></Burger>
          </div>
        </div>
        <div>
          
          <Image
            className="hidden md:block w-full"
            src={hero}
            alt="hero png"
          ></Image>
        </div>
      </div>
    </>
  );
}

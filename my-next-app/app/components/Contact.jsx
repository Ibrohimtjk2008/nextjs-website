import inn from "@/app/assets/icons/in.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import be from "@/app/assets/icons/be.svg";
import ball from "@/app/assets/icons/ball.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div id="contact" className="container mx-auto">
        <div className="py-28 flex flex-col gap-9 text-center justify-center items-center">
          <p className="text-5xl font-extrabold">Contacts</p>
          <p className="text-xl">
            Want to know more or just chat?
            <br /> You are welcome!
          </p>
          <button className="md:py-2 px-5 w-fit bg-black text-white rounded-full">
            Send message
          </button>
          <div className="flex justify-between w-2/6">
            <Image src={inn} alt="error"></Image>
            <Image src={instagram} alt="error"></Image>
            <Image src={be} alt="error"></Image>
            <Image src={ball} alt="error"></Image>
          </div>
          <p className="text-gray-300 md:hidden">Like me on<br/>
          LinkedIn, Instagram, Behance, Dribble</p>
        </div>
      </div>
    </>
  );
}

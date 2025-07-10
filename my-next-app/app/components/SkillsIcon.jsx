import Image from "next/image";
import ps from "@/app/assets/icons/ps.svg";
import ai from "@/app/assets/icons/ai.svg";
import ae from "@/app/assets/icons/ae.svg";
import figma from "@/app/assets/icons/figma.svg";
import stars4 from "@/app/assets/icons/stars4.svg";
// import stars3 from "@/app/assets/icons/stars3.svg";
export default function SkillsIcon({ name, stars, children }) {
  function icon_list() {
    return {
      ps: ps,
      ai: ai,
      ae: ae,
      figma: figma,
    }[name];
  }
  function icon_stars() {
    return {
      stars4: stars4,
      stars4: stars4,
      stars4: stars4,
      stars4: stars4,
    }[stars];
  }
  return (
    <>
      <div className="w-40 flex flex-col gap-5 items-center">
        <Image src={icon_list() || null} alt="ps image"></Image>
        <p className="text-center">{children}</p>
        <Image src={icon_stars() || null} alt="stars image"></Image>
      </div>
    </>
  );
}

import SkillsIcon from "./SkillsIcon";

export default function Skills() {
  return (
    <>
      <div id="skills" className=" w-full h-auto container mx-auto py-18 flex flex-col gap-20">
        <div className="items-center flex flex-col gap-6 ">
          <p className="text-5xl font-extrabold">Skills</p>
          <p className="text-xl">I work in such programs as</p>
        </div>
        <div className="flex flex-col items-center gap-6 md:flex-row justify-between">
          <SkillsIcon name="ps" stars="stars4">
            Adobe
            <br />
            Photoshop
          </SkillsIcon>
          <SkillsIcon name="ae" stars="stars4">
            Adobe
            <br />
            Illustrator
          </SkillsIcon>
          <SkillsIcon name="ai" stars="stars4">
            Adobe
            <br />
            After Effects
          </SkillsIcon>
          <SkillsIcon name="figma" stars="stars4">
            Figma
          </SkillsIcon>
        </div>
      </div>
    </>
  );
}

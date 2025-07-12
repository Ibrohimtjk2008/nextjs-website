import Image from "next/image";
import portfolio from "@/app/assets/Images/portfolio.png";
import reebok from "@/app/assets/Images/reebok.png";
import braun from "@/app/assets/Images/braun.png";
import Link from "next/link";

export default function PortfolioPhoto({ link, name, children }) {
  function ProjectPhoto() {
    return {
      portfolio: portfolio,
      reebok: reebok,
      braun: braun,
    }[name];
  }
  return (
    <>
      <div className="flex flex-col gap-8">
        <Image src={ProjectPhoto()} alt="image"></Image>
        <Link href={link}>
          <p className="text-2xl text-center underline">{children}</p>
        </Link>
      </div>
    </>
  );
}

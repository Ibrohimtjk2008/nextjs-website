import Link from "next/link";

export default function Header() {
  return (
    <div className="hidden md:block container mx-auto">
      <nav className=" flex w-full justify-center">
        <ul className="w-full flex gap-4 text-xl items-center justify-between border-b border-b-gray-500 py-5">
          <li>
            <Link className="text-2xl" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="text-2xl" href={"#aboutme"}>
              About me
            </Link>
          </li>
          <li>
            <Link className="text-2xl" href={"#skills"}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="text-2xl" href={"#portfolio"}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="text-2xl" href={"#contact"}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

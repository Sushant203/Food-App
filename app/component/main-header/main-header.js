import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="fixed top-0 left-0 w-full flex justify-around items-center px-4 py-2 ">
        <Link
          href="/"
          className="flex items-center gap-4 text-[#ddd6cb] font-bold tracking-widest uppercase text-2xl"
        >
          <Image
            src={logoImg}
            alt="a plate with food items"
            className="h-20 w-20 object-cover drop-shadow-md shadow-white"
            priority
          />
          NextLevel Food
        </Link>
        <nav className="text-custom-link font-bold px-0.5 py-1 rounded-lg">
          <ul className="list-none m-0 p-0 flex gap-6 text-xl">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Browse community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

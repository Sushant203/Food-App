import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <section>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="a plate with food items" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Browse community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

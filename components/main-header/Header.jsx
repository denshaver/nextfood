import Link from "next/link";
import NavLink from "./NavLink";
import logoImage from "@/assets/logo.png";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImage} alt="A plate with food on it!" priority />
          NextLevel logo
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

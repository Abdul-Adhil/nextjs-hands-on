import React from "react";
import Link from "next/link";
import styles from "./layout.module.scss";

export default function layout({ children }) {
  return (
    <div>
      <nav className={styles["nav"]}>
        <Link href={"/"} className={styles["landing"]}>
          Landing Page
        </Link>
        <Link href={"/home"} className={styles["about"]}>
          Movie Home Page
        </Link>
        <Link href={"/about"} className={styles["about"]}>
          About Page
        </Link>
      </nav>
      {children}
    </div>
  );
}

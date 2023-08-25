import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles["links"]}>
      <Link href={"/home"} className={styles["home"]}>
        Movie Home Page
      </Link>
      <Link href={"/about"} className={styles["about"]}>
        About Page
      </Link>
      
    </main>
  );
}

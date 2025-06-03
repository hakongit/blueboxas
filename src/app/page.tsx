import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/bluebox-logo.svg"
          alt="Bluebox AS logo"
          width={80}
          height={80}
          className={styles.logo}
          priority
        />
        <h1 className={styles.title}>Bluebox AS</h1>
        <h2 className={styles.tagline}>Investing in the Future. Consulting for Today.</h2>
        <p className={styles.description}>
          Norwegian investment & consultancy. We leverage AI and technology to help businesses grow and innovate.
        </p>
        <a
          className={styles.contact}
          href="mailto:hakon@blueboxas.no?subject=Contact%20from%20Landing%20Page"
        >
          Contact Håkon Årøen
        </a>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Bluebox AS. All rights reserved.
      </footer>
    </div>
  );
}

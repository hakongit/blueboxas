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
          We leverage AI and technology to help businesses grow and innovate.
        </p>
        <a
          className={styles.contact}
          href="mailto:hakon@blueboxas.no"
        >
          Contact Håkon Årøen
        </a>
        <a
          className={styles.contact}
          href="tel:+4790507678"
          style={{ marginTop: '0.5em' }}
        >
          +47 90 50 76 78
        </a>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Bluebox AS. Org nr 911 765 586. All rights reserved.
      </footer>
    </div>
  );
}

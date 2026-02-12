import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.gridOverlay} />
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className={styles.glowOrb3} />

      <div className={styles.cardWrap}>
        <main className={styles.main}>
          <div className={styles.logoWrap}>
            <Image
              src="/bluebox-logo.svg"
              alt="Bluebox AS logo"
              width={90}
              height={90}
              className={styles.logo}
              priority
            />
          </div>

          <h1 className={styles.title}>Bluebox AS</h1>

          <p className={styles.tagline}>Building Tomorrow.</p>
          <p className={styles.taglineSub}>Helping You Grow &amp; Succeed.</p>

          <p className={styles.description}>
            We build intelligent solutions and craft software that thinks ahead — so your business doesn&apos;t have to stand still.
          </p>

          <div className={styles.contactGroup}>
            <a
              className={styles.contact}
              href="mailto:kontakt@blueboxas.no"
            >
              kontakt@blueboxas.no
            </a>
            <a
              className={`${styles.contact} ${styles.contactOutline}`}
              href="tel:+4790507678"
            >
              +47 90 50 76 78
            </a>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Bluebox AS &middot; Org nr 911 765 586
      </footer>
    </div>
  );
}

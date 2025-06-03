import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Bluebox AS</h1>
        <h2 className={styles.tagline}>Investing in the Future. Consulting for Today.</h2>
        <p className={styles.description}>
          Bluebox AS is a Norwegian investment and consultancy firm helping businesses grow, innovate, and succeed. We combine deep market insight with hands-on expertise to deliver real results for our clients.
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

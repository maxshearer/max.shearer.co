import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <strong>Max Shearer</strong>—Designer and full(ish)-stack developer,
          building <Link href="https://waywi.se">Waywise</Link> on the side.
        </h1>
      </main>
      <section className={styles.work}></section>
    </div>
  );
}

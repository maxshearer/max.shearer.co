import styles from "./rainbow.module.css";

export default function Rainbow() {
  return (
    <div className={styles.rainbow}>
      <div className={styles.base} />
      <div className={styles.color} />
      <div className={styles.blend} />

      <div className={styles.noise} />
    </div>
  );
}

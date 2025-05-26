import Link from "next/link";
import styles from "../styles/error.module.css";

export default function ErrorMessage({ error }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error Occurred</h1>
      <p className={styles.message}>
        {error?.message || "An unexpected error occurred."}
      </p>
      <Link href="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
}

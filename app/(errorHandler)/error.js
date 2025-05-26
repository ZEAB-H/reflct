"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./styles/error.module.css";
import { logError } from "@/lib/utils/errorLogger";

export default function Error({ error, reset }) {
  useEffect(() => {
    logError(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Something Went Wrong</h1>
      <p className={styles.message}>
        An unexpected error occurred: {error?.message || "Unknown error"}.
      </p>
      <div className={styles.actions}>
        <button onClick={reset} className={styles.button}>
          Try Again
        </button>
        <Link href="/" className={styles.link}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

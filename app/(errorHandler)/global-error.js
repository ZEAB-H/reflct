"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./styles/error.module.css";
import { logError } from "@/lib/utils/errorLogger";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    logError(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className={styles.container}>
          <h1 className={styles.title}>Critical Error</h1>
          <p className={styles.message}>
            A critical error occurred. Please try again or contact support.
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
      </body>
    </html>
  );
}

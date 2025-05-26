import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/404-image.png"
        alt="404 Error"
        width={300}
        height={300}
        className={styles.image}
      />
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
}

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

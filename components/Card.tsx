import styles from "../styles/Card.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface cardProps {
  direction: string;
  image: string;
  content: string;
  page: string;
}

export default function Card({ direction, image, content, page }: cardProps) {
  if (direction === "left") {
    return (
      <Link className={styles.link} href={page}>
        <motion.div
          initial={{ opacity: 0, translateX: "-200px" }}
          whileInView={{
            opacity: 1,
            translateX: "0px",
            transition: { duration: 0.5, delay: 0.2 },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className={styles.card_left}
        >
          <Image
            className={styles.image}
            src={image}
            alt=""
            width={7200}
            height={480}
          />
          <p className={styles.text}>{content}</p>
        </motion.div>
      </Link>
    );
  } else {
    return (
      <Link className={styles.link} href={page}>
        <motion.div
          initial={{ opacity: 0, translateX: "200px" }}
          whileInView={{
            opacity: 1,
            translateX: "0px",
            transition: { duration: 0.5, delay: 0.2 },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className={styles.card_right}
        >
          <p className={styles.text}>{content}</p>
          <Image
            className={styles.image}
            src={image}
            alt=""
            width={7200}
            height={480}
          />
        </motion.div>
      </Link>
    );
  }
}

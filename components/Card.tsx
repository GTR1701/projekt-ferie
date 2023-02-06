import styles from "../styles/Card.module.css";
import Link from "next/link";
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
            transition: { duration: 1, delay: 0.3 },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className={styles.card}
        >
          <div className={styles.right}>
            <p className={styles.text}>{content}</p>
          </div>
          <div className={styles.left}>
            <img className={styles.image} src={image} alt="" />
          </div>
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
            transition: { duration: 1, delay: 0.3 },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          className={styles.card}
        >
          <div className={styles.right}>
            <p className={styles.text}>{content}</p>
          </div>
          <div className={styles.left}>
            <img className={styles.image} src={image} alt="" />
          </div>
        </motion.div>
      </Link>
    );
  }
}

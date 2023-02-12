import styles from "../styles/Card.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

interface cardProps {
  direction: string;
  image: string;
  name: string;
  price: string;
  size: string;
  content: string;
}

export default function Section({
  direction,
  image,
  content,
  price,
  name,
  size,
}: cardProps) {
  if (direction === "left") {
    return (
      <motion.div
        initial={{ opacity: 0, translateX: "-200px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 1, delay: 0.3 },
        }}
        className={styles.section_left}
      >
        <img className={styles.image} src={image} alt="" />
        <div>
          <h1 className={styles.title}>{name}</h1>
          <h3 className={styles.cena}>{price}</h3>
          <h3 className={styles.size}>{size}</h3>
          <p className={styles.content}>{content}</p>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, translateX: "200px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 1, delay: 0.3 },
        }}
        className={styles.section_right}
      >
        <div>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.size_left}>{size}</p>
          <p className={styles.content}>{content}</p>
        </div>
        <img className={styles.image} src={image} alt="" />
      </motion.div>
    );
  }
}

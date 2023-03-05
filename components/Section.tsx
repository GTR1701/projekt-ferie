import styles from "../styles/Card.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

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
          transition: { duration: 0.5, delay: 0.2 },
        }}
        className={styles.section_left}
      >
        <Image
          className={styles.image}
          src={image}
          alt=""
          width={720}
          height={480}
        />
        <div>
          <h1 className={styles.title}>{name}</h1>
          <h3 className={styles.cena}>{price}</h3>
          <h3 className={styles.size}>{size}</h3>
          <p className={styles.content}>{content}</p>
        </div>
      </motion.div>
    );
  } else if (direction === "lefth1") {
    return (
      <motion.div
        initial={{ opacity: 0, translateX: "-200px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 0.5, delay: 0.2 },
        }}
        className={styles.section_left}
      >
        <Image
          className={styles.image}
          src={image}
          alt=""
          width={720}
          height={480}
        />
        <div>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.size_left}>{size}</p>
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
          transition: { duration: 0.5, delay: 0.2 },
        }}
        className={styles.section_right}
      >
        <div>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.size_left}>{size}</p>
          <p className={styles.content}>{content}</p>
        </div>
        <Image
          className={styles.image}
          src={image}
          alt=""
          width={720}
          height={480}
        />
      </motion.div>
    );
  }
}

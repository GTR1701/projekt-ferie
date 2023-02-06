import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import useMountTransition from "../hooks/useMountTransition";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ sticky }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 1;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else if (winScroll < 200) {
      setIsVisible(false);
    }
  };
  if (sticky) {
    return (
      <>
        {!isVisible && (
          <motion.div
            className={!isVisible ? styles.transparent : styles.transparent}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <section className={styles.center}>
              <Link className={styles.transparent_btn} href={"/"}>
                HOTEL
              </Link>
              <Link className={styles.transparent_btn} href={"/Oferta"}>
                PAKIETY
              </Link>
              <Link className={styles.transparent_btn} href={"/Pokoje"}>
                POKOJE
              </Link>
              <Link className={styles.transparent_btn} href={"/Restauracje"}>
                RESTAURACJE
              </Link>
              <Link className={styles.transparent_btn} href={"/Atrakcje"}>
                ATRAKCJE I USŁUGI
              </Link>
              <Link className={styles.transparent_btn} href={"/Kontakt"}>
                KONTAKT
              </Link>
            </section>
          </motion.div>
        )}
      </>
    );
  } else {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={isVisible ? styles.navbar_visible : styles.navbar}
            initial={{ translateY: "-70px" }}
            animate={{ translateY: "0px" }}
            transition={{ duration: 0.3 }}
            exit={{ translateY: "-70px" }}
          >
            <section className={styles.center}>
              <Link className={styles.btn} href={"/"}>
                HOTEL
              </Link>
              <Link className={styles.btn} href={"/Oferta"}>
                PAKIETY
              </Link>
              <Link className={styles.btn} href={"/Pokoje"}>
                POKOJE
              </Link>
              <Link className={styles.btn} href={"/Restauracje"}>
                RESTAURACJE
              </Link>
              <Link className={styles.btn} href={"/Atrakcje"}>
                ATRAKCJE I USŁUGI
              </Link>
              <Link className={styles.btn} href={"/Kontakt"}>
                KONTAKT
              </Link>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}

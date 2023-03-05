import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.tekst}>Autor: Dawid Kowal</p> <br />
      <h5>
        Ta strona to demo. Funkcje związane z rezerwacją są przykładem działania
        strony.
      </h5>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/End.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel Atreus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.message}>
        <div>
          <h1>Dziękujemy za rezerwację!</h1>
          <div className={styles.submit_cont}>
            <Link href={"/"}>
              <button className={styles.submit}>WRÓĆ NA STRONĘ GŁÓWNĄ</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

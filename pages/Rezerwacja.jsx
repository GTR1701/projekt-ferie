import {
  doc,
  writeBatch,
  getFirestore,
  getCountFromServer,
  collection,
} from "firebase/firestore";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Rezerwacja.module.css";
import Calendar from "react-calendar";
import { useState, useEffect, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import "react-hot-toast";
import toast from "react-hot-toast";
import { UserContext } from "../lib/context";
import AuthCheck from "../components/AuthCheck";
import Image from "next/image";

export default function Book() {
  const [przyjazd, setPrzyjazd] = useState(new Date());
  const [wyjazd, setWyjazd] = useState(new Date());
  const [prawidlowaData, setPrawidlowaData] = useState(true);
  const [radio, setRadio] = useState(true);
  const [pokoj, setPokoj] = useState();
  const [noce, setNoce] = useState();
  const [osoby, setOsoby] = useState();
  const [imieNazwisko, setImieNazwisko] = useState();
  const [mail, setMail] = useState();
  const [tel, setTel] = useState();
  const [ulica, setUlica] = useState();
  const [zip, setZip] = useState();
  const [miasto, setMiasto] = useState();
  const [change, setChange] = useState(false);
  const [id, setId] = useState();

  const { user, username } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Doc = await collection(
      getFirestore(),
      "users",
      user.uid,
      "Rezerwacje"
    );
    const snapshot = await getCountFromServer(Doc);
    const count = snapshot.data().count + 1;
    setId(toString(count));
    const userDoc = doc(
      getFirestore(),
      "users",
      user.uid,
      "Rezerwacje",
      `Rezerwacja ${count}`
    );
    const batch = writeBatch(getFirestore());
    batch.set(userDoc, {
      id: id,
      dataPrzyjazdu: przyjazd,
      dataWyjazdu: wyjazd,
      pokojPakiet: pokoj,
      ilośćNocy: noce,
      ilośćOsób: osoby,
      imięINazwisko: imieNazwisko,
      eMail: mail,
      nrTelefonu: tel,
      Ulica: ulica,
      kodPocztowy: zip,
      miasto: miasto,
      username: username,
    });
    await batch.commit();
    toast.success("Rezerwacja udana. Dziękujemy za zaufanie!");
    setRadio(null);
    setPokoj(null);
    setNoce(null);
    setOsoby(null);
    setImieNazwisko(null);
    setMail(null);
    setTel(null);
    setUlica(null);
    setZip(null);
    setMiasto(null);
  };

  useEffect(() => {
    if (przyjazd >= wyjazd) {
      const difference = przyjazd - wyjazd;
      let dni = Math.ceil(difference / (1000 * 3600 * 24));
      setPrawidlowaData(false);
      setNoce(dni);
    } else {
      setPrawidlowaData(true);
    }
  }, [change]);

  const notify = () => {
    if (prawidlowaData) {
      toast.error("wybierz prawidłową datę");
    }
  };

  return (
    <AuthCheck>
      <Head>
        <title>Hotel Atreus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          as="image"
        />
      </Head>
      <Image
        className="banner"
        alt=""
        src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        width={1920}
        height={860}
        priority={true}
      />
      <Navbar sticky={false} />
      <div className="space-o"></div>
      <form onSubmit={handleSubmit}>
        <div className={styles.rezerwacja}>
          <label htmlFor="od">Data przyjazdu:</label>
          <input
            type="text"
            name="od"
            id="od"
            className={styles.center_input}
            disabled
            value={wyjazd.toLocaleDateString("pl", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          />
          <h1 className={styles.nacisnij}>
            Naciśnij podwójnie na dzień na kalendarzu
          </h1>
          <label htmlFor="do">Data wyjazdu:</label>
          <input
            type="text"
            name="od"
            id="od"
            className={styles.center_input}
            disabled
            value={przyjazd.toLocaleDateString("pl", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          />
        </div>
        <div className={styles.kalendarze}>
          <Calendar
            onClickDay={setChange}
            onChange={setWyjazd}
            value={wyjazd}
          />
          <Calendar
            onClickDay={setChange}
            onChange={setPrzyjazd}
            value={przyjazd}
          />
        </div>

        <h1 className={styles.naglowek}>Wybierz typ rezerwacji</h1>
        <div className={styles.pokoje}>
          <label htmlFor="typ">Pokój</label>
          <input
            required={true}
            type="radio"
            name="typ"
            id="typ"
            value={"Pokój"}
            onClick={() => setRadio(true)}
          />
          <span> </span>
          <label htmlFor="typ">Pakiet</label>
          <input
            required={true}
            type="radio"
            name="typ"
            id="typ"
            value={"Pakiet"}
            onClick={() => setRadio(false)}
          />
          <span></span>
          <select
            required={true}
            name="pokoj"
            id="pokoj"
            disabled={!radio}
            className={styles.lista}
            value={pokoj}
            onChange={(e) => setPokoj(e.target.value)}
          >
            <option id="1" value="">
              --wybierz pokój--
            </option>
            <option id="2" value="Małżeński">
              Małżeński
            </option>
            <option id="3" value="Rodzinny">
              Rodzinny
            </option>
          </select>
          <span></span>
          <span></span>
          <select
            required={true}
            name="pakiet"
            id="pakiet"
            disabled={radio}
            className={styles.lista}
            value={pokoj}
            onChange={(e) => setPokoj(e.target.value)}
          >
            <option id="1p" value="">
              --wybierz pakiet--
            </option>
            <option id="2p" value="Pakiet Małżeński z Pełnym Wyżywieniem">
              Pakiet Małżeński z Pełnym Wyżywieniem
            </option>
            <option id="3p" value="Pakiet Małżeński ze Śniadaniem">
              Pakiet Małżeński ze Śniadaniem
            </option>
            <option id="4p" value="Pakiet Rodzinny z Pełnym Wyżywieniem">
              Pakiet Rodzinny z Pełnym Wyżywieniem
            </option>
            <option id="5p" value="Pakiet Rodzinny ze Śniadaniem">
              Pakiet Rodzinny ze Śniadaniem
            </option>
            <option id="6p" value="Pakiet Ski Holidays">
              Pakiet Ski Holidays
            </option>
          </select>
        </div>

        <h1 className={styles.naglowek}>Wypełnij dane</h1>
        <div className={styles.dane}>
          <label htmlFor="noce">Noce:</label>
          <span></span>
          <input
            disabled={true}
            type="text"
            name="noce"
            id="noce"
            value={noce}
            onChange={(e) => setNoce(e.target.value)}
          />
          <input
            required={true}
            type="number"
            name="osoby"
            id="osoby"
            placeholder="Ilośc osób"
            value={osoby}
            onChange={(e) => setOsoby(e.target.value)}
          />
          <input
            required={true}
            type="text"
            name="name"
            id="name"
            placeholder="Imię i nazwisko"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
          />
          <input
            required={true}
            type="text"
            name="mail"
            id="mail"
            placeholder="Adres e-mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            required={true}
            type="text"
            name="tel"
            id="tel"
            placeholder="Numer telefonu"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            required={true}
            type="text"
            name="ulica"
            id="ulica"
            placeholder="Ulica"
            value={ulica}
            onChange={(e) => setUlica(e.target.value)}
          />
          <input
            required={true}
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="Kod pocztowy"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <input
            required={true}
            type="text"
            name="city"
            id="city"
            placeholder="Miasto"
            value={miasto}
            onChange={(e) => setMiasto(e.target.value)}
          />
        </div>

        <div className={styles.submit_cont} onMouseEnter={() => notify()}>
          <input
            type="submit"
            disabled={prawidlowaData}
            className={styles.submit}
            value="ZAREZERWUJ"
          />{" "}
        </div>
      </form>
      <Navbar sticky={true} />
      <Footer />
    </AuthCheck>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel Atreus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        className="banner"
        alt=""
        src="https://images.unsplash.com/photo-1667293272142-21d22f60acf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Navbar sticky={false} />
      {/* <motion.h1
        initial={{ opacity: 0, translateX: "-200px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 1, delay: 0.3 },
        }}
        className={styles.tekst}
      >
        HOTEL ATREUS
      </motion.h1> */}
      <div className="space"></div>
      {/* <img alt="" src="/banner.jpg" /> */}
      <Card
        direction="left"
        image="https://media.istockphoto.com/id/1305177948/pl/zdj%C4%99cie/rodzina-z-ma%C5%82ymi-dzie%C4%87mi-w%C4%99druje-na-%C5%9Bwie%C5%BCym-powietrzu-latem-na-turze-spaceruj%C4%85c-po-tatrach.jpg?s=612x612&w=0&k=20&c=v-FUo6Ze9XLjqVFhlfgFvIBYgHyn-3wFZHwFbhRv8mE="
        content="Hotel Atreus to idealny hotel do spędzenia wakacji w ciepłej, rodzinnej atmosferze. Nasz hotel znajduje się u podnóża lokalnej góry, co oznacza idealne miejsce na początek letniej wędrówki. "
        page="/Atrakcje"
      />
      <Card
        direction="right"
        image="https://media.istockphoto.com/id/635973512/pl/zdj%C4%99cie/domy-i-%C5%9Bnie%C5%BCne-g%C3%B3ry-panorama-w-bu%C5%82garskim-o%C5%9Brodku-narciarskim-bansko.jpg?s=612x612&w=0&k=20&c=uIaZsElZ77B1qirrtdiXP9vDqGRKFUMhltYBdDzC3ns="
        content="Nasz hotel oferuje wiele różnych pakietów dostosowanych do długości pobytu, zawartych w nich usług oraz wiele więcej!"
        page="/Pakiety"
      />
      <Card
        direction="left"
        image="https://media.istockphoto.com/id/1168473903/pl/zdj%C4%99cie/wakacyjne-miasto-w-kolorado-ze-sklepami-i-stojakiem-na-narty-snowboardowe.jpg?s=612x612&w=0&k=20&c=jdW25Ml4NrJV1o9uOIedhAI0kJpxehWLqHGwTMTRKXA="
        content="W okresie zimowym Nasz hotel oferuje dostęp do wypożyczalni, serwisu oraz przechowalni sprzętu narciarskiego. Oferujemy usługi smarowania oraz ostrzenia nart i desek, suszenie sprzętu oraz regulację wiązań w nartach."
        page="/Narty"
      />
      <Card
        direction="right"
        image="https://media.istockphoto.com/id/1267427268/pl/zdj%C4%99cie/%C5%82%C3%B3%C5%BCko-w-hotelu-nad-pi%C4%99knym-jeziorem.jpg?s=612x612&w=0&k=20&c=SpePYI6ybY5abPDhxxdr1RlImCCyCtYO0pLEmgLo9aY="
        content="Nasze pokoje są przestronne oraz stylowo wystrojone. Każdy z hotelowych pokoi posiada okna z widokiem na okoliczny krajobraz. Oferujemy także sprzątanie pokoi co drugi dzień."
        page="/Pokoje"
      />
      <Card
        direction="left"
        image="https://images.unsplash.com/photo-1546940071-03b96ed021c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        content="Hotel Atreus oferuje śniadania oraz obiado-kolacje w hotelowej restauracji. Poza wyznaczonymi godzinami posiłków, restauracja dostępna jest dla wszystkich gości hotelu. Oferujemy szeroką gamę przystawek, dań, napoi oraz deserów."
        page="/Restauracje"
      />
      <Navbar sticky={true} />
      <Footer />
    </>
  );
}

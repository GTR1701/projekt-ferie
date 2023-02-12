import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Kontakt.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        width="100%"
        height="100%"
        src="/banner.jpg"
      />
      <Navbar sticky={false} />
      <Navbar sticky={true} />
      <div className="space"></div>
      <Image alt="" width={1550} height={600} src="/banner.jpg" />
      <Footer />
    </>
  );
}

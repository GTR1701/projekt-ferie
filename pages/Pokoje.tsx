import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel Atreus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        className="banner"
        alt=""
        src="/Rooms.jpg"
        width={1920}
        height={860}
        priority={true}
      />
      <Navbar sticky={false} />
      <div className="space"></div>
      <Section
        direction={"left"}
        image={
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        name={"Pokój Małżeński"}
        price={"400zł/osobę za noc"}
        size={"Rozmiar: Pokój dwuosobowy"}
        content={
          "Pokój z łóżkiem małżeńskim, telewizorem oraz aneksem kuchennym."
        }
      />
      <Section
        direction={"left"}
        image={
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        name={"Pokój Rodzinny"}
        price={"350zł/osobę za noc"}
        size={"Pokój dwuosobowy z dostawką"}
        content={
          "Pokój z łóżkiem małżeńskim, rozkładaną kanapą, stołem telewizorem oraz aneksem kuchennym."
        }
      />
      <Navbar sticky={true} />
      <Footer />
    </>
  );
}

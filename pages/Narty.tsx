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
        <link
          rel="preload"
          href="https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          as="image"
        />
      </Head>
      <Image
        width={1920}
        height={860}
        priority={true}
        className="banner"
        alt=""
        src="https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Navbar sticky={false} />
      <div className="space-o"></div>
      <Section
        direction={"right"}
        image={
          "https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        name={"Wypożyczalnia sprzętu narciarskiego"}
        price={""}
        size={
          "W okresie zimowym Nasz hotel oferuje usługę wypożyczenia oraz utrzymania sprzętu narciarskiego."
        }
        content={""}
      />
      <Section
        direction={"lefth1"}
        image={
          "https://images.unsplash.com/photo-1486684338211-1a7ced564b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        name={"Duży wybór sprzetu zimowego"}
        price={""}
        size={
          "Nasza wypożyczalnia oferuje duży wybór nart, desek snowboardowych, oraz akcesorii narciarkich (kaski, buty narciarskie, buty snowboardowe, kije)."
        }
        content={""}
      />
      <Section
        direction={"right"}
        image={
          "https://skiteam.pl/img/leoblog/b/4/296/lg-b-smarowanie_nart_blog.jpg"
        }
        name={"Usługi związane z prywatnym sprzętem"}
        price={""}
        size={
          "Dla gości z własnym sprzętem oferujemy usługi ostrzenia, smarowania oraz suszenia nart, suszenia butów oraz przechowania kasków i kijków."
        }
        content={""}
      />
      <Navbar sticky={true} />
      <Footer />
    </>
  );
}

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
          href="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          as="image"
        />
      </Head>
      <Image
        className="banner"
        alt=""
        src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={1920}
        height={860}
        priority={true}
      />
      <Navbar sticky={false} />
      <div className="space-o"></div>
      <Section
        direction={"right"}
        image={
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        name={"Restauracja Main"}
        price={""}
        size={
          "Otwarta w godzinach 7-10 (śniadania), 10-16, 16-19 (obiado-kolacje), 19-22"
        }
        content={
          "Główna restauracja z widokiem na pobliski szczyt. W restauracji Main serwowane są wykupione śniadania oraz obiado-kolacje w formie szwedzkiego bufetu. Poza godzinami posiłków, dostępna jest jako zwykła restauracja z kartą dań."
        }
      />
      <Section
        direction={"right"}
        image={
          "https://images.unsplash.com/photo-1571757392712-7c1052de7ce5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        name={"Pizzeria Romana"}
        price={""}
        size={"Otwarta w godzinach 10-22"}
        content={
          "Pizzeria Romana to hotelowa pizzeria dostępna dla wszystkich, zarówno gości jak i osób z zewnątrz. Pizza przygotowywana jest ze świeżych składników i pieczona w piecu opalanym drewnem. Oprócz pizzy oferujemy także makarony, zapiekanki oraz inne włoskie dania."
        }
      />
      <Section
        direction={"right"}
        image={
          "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
        }
        name={"Lobby Bar"}
        price={""}
        size={"Otwarty w godzinach 10-23"}
        content={
          "Nasz Lobby Bar oferuje szeroki wybór alkoholi, drinków, jak i koktajli bezalkoholowych, serwowanych przez profesjonalnych barmanów"
        }
      />
      <Navbar sticky={true} />
      <Footer />
    </>
  );
}

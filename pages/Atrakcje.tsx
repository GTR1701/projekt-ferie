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
          href="https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          as="image"
        />
      </Head>
      <Image
        className="banner"
        alt=""
        width={1920}
        height={860}
        priority={true}
        src="https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Navbar sticky={false} />
      <div className="space-o"></div>
      <Section
        direction={"lefth1"}
        image={
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        name={"Atreus SPA & Wellness"}
        price={""}
        size={"Otwarte w godzinach 10-20"}
        content={
          "W Atreus SPA & Wellness dostępna jest szeroka oferta zabiegów, takich jak masaże lub zabiegi twarzy."
        }
      />
      <Section
        direction={"right"}
        image={
          "https://images.unsplash.com/photo-1494194069000-cb794f31d82c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        name={"Strefa basenów"}
        price={""}
        size={"Otwarta w godzinach 9-21"}
        content={
          "W strefie basenów znajdują się 2 duże baseny oraz 3 jacuzzi. Na terenie strefy dostępne są leżaki oraz darmowe ręczniki"
        }
      />
      <Section
        direction={"lefth1"}
        image={
          "https://images.unsplash.com/photo-1583417657209-d3dd44dc9c09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        name={"Strefa Saun"}
        price={""}
        size={"Otwarta w godzinach 9-21"}
        content={
          "Dostępna dla osób powyżej 16 roku życia strefa saun znajduje się na terenie strefy basenów. Posiada ona 4 różne sauny: Fińską, Parową, Ziołową oraz Podczerwoną. Oprócz tego, na jej terenie znajduje się jacuzzi, prysznice oraz grota solna."
        }
      />
      <Section
        direction={"right"}
        image={
          "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        }
        name={"Strefa Fitness"}
        price={""}
        size={"Otwarta w godzinach 7-21"}
        content={
          "W strefie fitness oferujemy szeroką gamę sprzętu do aktywności fizycznej. Dla miłośników sportu mamy bieznie, orbitreki, atlasy oraz sprzęt do ćwiczeń siłowych i ogólnorozwojowych."
        }
      />
      <Section
        direction={"lefth1"}
        image={
          "https://images.unsplash.com/photo-1600821986515-3ef5b0f29f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
        }
        name={"Strefa Dziecięca"}
        price={""}
        size={"Otwarta w godzinach 8-22"}
        content={
          "Hotel Atreus oferuje także strefę zabaw dla najmłodszych. Znajduje się w niej wewnętrzny plac zabaw, basen z piłkami oraz wiele zabawek."
        }
      />
      <Navbar sticky={true} />
      <Footer />
    </>
  );
}

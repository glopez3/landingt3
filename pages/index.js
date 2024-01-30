import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Información de Gustavo López</title>
        <meta
          name="description"
          content="Información de Gustavo López"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Habilidades y conocimientos"
        title="Gestión de tecnología e innovación">
        Diversa experiencia en gestión y transferencia de tecnología.
      </SectionTitle>
      <Benefits data={benefitOne} />

    </>
  );
}

export default Home;
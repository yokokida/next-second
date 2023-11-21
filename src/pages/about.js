import Header from "../components/Header";
import Footer from "../components/Footer";
import PageMv from "../components/ModuleMv.astro";
import AboutIntro from "../components/AboutIntro.js";
import AboutOutline from "../components/AboutOutline.js";
import AboutLicense from "../components/AboutLicense.js";
import AboutHistory from "../components/AboutHistory.js";
import AboutAccess from "../components/AboutAccess.js";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <PageMv />
        <AboutIntro />
        <AboutOutline />
        <AboutLicense />
        <AboutHistory />
        <AboutAccess />
      </main>
      <Footer />
    </>
  );
}

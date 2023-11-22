import Header from "../components/Header";
import Footer from "../components/Footer";
import ModuleMv from "../components/ModuleMv.js";
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
        <ModuleMv />
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

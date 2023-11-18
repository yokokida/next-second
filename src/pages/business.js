import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import BusinessStrength from "../components/BusinessStrength.js";
import BusinessService from "../components/BusinessService.js";
import BusinessClient from "../components/BusinessClient.js";
import BusinessArea from "../components/BusinessArea.js";
import BusinessQuality from "../components/BusinessQuality.js";

export default function Business() {
  return (
    <>
      <Header />
      <main>
        <BusinessStrength />
        <BusinessService />
        <BusinessClient />
        <BusinessArea />
        <BusinessQuality />
      </main>
      <Footer />
    </>
  );
}

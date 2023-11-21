import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HomeAbout from "../components/HomeAbout.js";
import HomeBusiness from "../components/HomeBusiness.js";
import HomeNews from "../components/HomeNews.js";
import HomeRecruit from "../components/HomeRecruit.js";

export default function Home({ blogs }) {
  return (
    <>
      <Header />
      <main>
        <HomeAbout />
        <HomeBusiness />
        <HomeNews />
        <HomeRecruit />
      </main>
      <Footer />
    </>
  );
}

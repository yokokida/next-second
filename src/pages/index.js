import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import HomeMv from "@/components/HomeMv.js";
import HomeAbout from "@/components/HomeAbout.js";
import HomeBusiness from "@/components/HomeBusiness.js";
import HomeNews from "@/components/HomeNews.js";
import HomeRecruit from "@/components/HomeRecruit.js";

export default function Home() {
  return (
    <div id="wrapper">
      <Header />
      <main>
        <HomeMv />
        <HomeAbout />
        <HomeBusiness />
        <HomeNews />
        <HomeRecruit />
      </main>
      <Footer />
    </div>
  );
}

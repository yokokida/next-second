import Header from "../components/Header.js";
import ModuleMv from "../components/ModuleMv.js";
import Footer from "../components/Footer.js";
import RecruitForm from "../components/RecruitForm.js";

export default function Contact() {
  return (
    <div id="wrapper">
      <Header />
      <main>
        <ModuleMv />
        <RecruitForm />
      </main>
      <Footer />
    </div>
  );
}

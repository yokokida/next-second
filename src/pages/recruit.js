import Header from "../components/Header.js";
import ModuleMv from "../components/ModuleMv.js";
import Footer from "../components/Footer.js";
import RecruitIntro from "../components/RecruitIntro";
import RecruitOccupation from "../components/RecruitOccupation";
import RecruitInterview from "../components/RecruitInterview";
import RecruitEnvironment from "../components/RecruitEnvironment";
import RecruitData from "../components/RecruitData";
import RecruitRequirement from "../components/RecruitRequirement";
import RecruitForm from "../components/RecruitForm";

export default function Recruit() {
  return (
    <>
      <Header />
      <main>
        <ModuleMv />
        <RecruitIntro />
        <RecruitOccupation />
        <RecruitInterview />
        <RecruitEnvironment />
        <RecruitData />
        <RecruitRequirement />
        <RecruitForm />
      </main>
      <Footer />
    </>
  );
}

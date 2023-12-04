import ModuleForm from "../components/ModuleForm";
import { SectionTitle } from "./ModuleSectionTitle";

export default function RecruitForm() {
  return (
    <>
      <section id="recruit-entry">
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="entry" subttl="エントリー" />
          <div id="form-box">
            <form action="https://ssgform.com/s/hOOcV8reaXzU" method="POST">
              <ModuleForm />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

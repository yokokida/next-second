import ModuleForm from "../components/ModuleForm";
export default function RecruitForm() {
  return (
    <>
      <section id="recruit-entry">
        <div class="sec-inner pt0">
          <div class="content-width">
            <div class="sec-ttl-box fadein-trigger is-active">
              <h2 class="sec-ttl">entry</h2>
              <p class="sec-sub-ttl">エントリー</p>
            </div>
            <div id="form-box">
              <form action="https://ssgform.com/s/hOOcV8reaXzU" method="POST">
                <ModuleForm />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

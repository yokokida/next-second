import Image from "next/image";
export default function RecruitData() {
  return (
    <>
      <section id="recruit-data">
        <div class="sec-inner pt0">
          <div class="content-width">
            <div class="sec-ttl-box fadein-trigger is-active">
              <h2 class="sec-ttl">data of nsk</h2>
              <p class="sec-sub-ttl">データで見る株式会社OO</p>
            </div>
            <div class="content-box">
              <div class="data-container">
                <div class="img-box">
                  <Image
                    src=""
                    alt="データで見る株式会社OO"
                    class="fadein-trigger"
                    width="359"
                    height="359"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

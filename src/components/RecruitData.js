import Image from "next/image";
import { SectionTitle } from "./ModuleSectionTitle";

export default function RecruitData() {
  return (
    <>
      <section id="recruit-data">
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="data of oo" subttl="データで見る株式会社OO" />
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
      </section>
    </>
  );
}

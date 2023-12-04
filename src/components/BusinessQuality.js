import Image from "next/image";
import { SectionTitle } from "./ModuleSectionTitle";

export default function BusinessQuality() {
  return (
    <>
      <section id="business-quality">
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="quality" subttl="品質方針" />
          <div class="content-box">
            <div class="m-img-txt-container">
              <div class="m-img-txt-box">
                <div class="img-area">
                  <div class="img-box">
                    <Image
                      src="/images/home/business_03.jpg"
                      alt="事業内容3"
                      class="fadein-trigger"
                      width="495"
                      height="300"
                    />
                  </div>
                </div>
                <div class="txt-area">
                  <h3 class="title">ISO9001取得</h3>
                  <p class="txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque fugiat velit quos eveniet magni rem dicta minus ut
                    necessitatibus repellat debitis explicabo, harum, optio,
                    doloremque voluptatibus laboriosam impedit cupiditate
                    nostrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

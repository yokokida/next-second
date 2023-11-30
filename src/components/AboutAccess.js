import Image from "next/image";
import { SectionTitleContentWidth } from "./ModuleSectionTitle";

export default function AboutAccess() {
  return (
    <>
      <section id="about-access">
        <div class="sec-inner pt0">
          <SectionTitleContentWidth ttl="access" subttl="アクセス" />
          <div class="content-box">
            <div class="content-width-narrow">
              <div class="headquarters">
                <h3 class="ttl ttl-large">本社</h3>
                <div class="img-box">
                  <Image
                    src="/images/home/business_03.jpg"
                    alt="事業内容3"
                    class="fadein-trigger"
                    width="920"
                    height="476"
                  />
                </div>
                <div class="txt-area">
                  <div class="txt">
                    <p>〒950-2001 新潟県新潟市西区青山新町</p>
                    <p>
                      TEL.
                      <a href="tel:000-000-0000" class="inter tel">
                        000-000-0000
                      </a>
                    </p>
                  </div>
                  <div class="btn-wrap">
                    <a href="" class="c-maps ex_link" target="_blank">
                      GoogleMapsはこちら
                    </a>
                  </div>
                </div>
              </div>
              <div class="branches">
                <div class="txt-area">
                  <h3 class="ttl ttl-large">西蒲営業所</h3>
                  <div class="txt">
                    <p>〒950-2001 新潟県新潟市西区青山新町-3</p>
                    <p>
                      TEL.
                      <a href="tel:080-9553-8864" class="inter tel">
                        080-9553-8864
                      </a>
                        
                      <br class="sp-only" />
                      FAX. <span class="inter">0256-72-2430</span>
                    </p>
                  </div>
                </div>
                <div class="btn-wrap">
                  <a href="" class="c-maps ex_link" target="_blank">
                    GoogleMapsはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

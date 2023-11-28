import Image from "next/image";
import BtnPrimary from "./ModuleBtnPrimary";

export default function HomeBisness() {
  return (
    <>
      <section id="home-business">
        <div class="sec-inner">
          <div class="content-width">
            <div class="sec-ttl-box left-center fadein-trigger">
              <h2 class="sec-ttl">business</h2>
              <p class="sec-sub-ttl">事業内容</p>
            </div>
            <div class="content-box">
              <div class="txt-area center-left">
                <p class="txt">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Dignissimos ipsa dolore
                </p>
                <BtnPrimary
                  url="business"
                  txt="事業内容はこちら"
                  class="btn-box"
                />
              </div>
              <div class="img-area">
                <Image
                  src="/images/home/business_01.jpg"
                  alt="事業内容1"
                  class="fadein-trigger"
                  width="428"
                  height="379"
                />
                <Image
                  src="/images/home/business_02.jpg"
                  alt="事業内容1"
                  class="fadein-trigger"
                  width="428"
                  height="509"
                />
                <Image
                  src="/images/home/business_03.jpg"
                  alt="事業内容1"
                  class="fadein-trigger"
                  width="550"
                  height="292"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

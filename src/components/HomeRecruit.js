import Image from "next/image";
import Link from "next/link";
import BtnPrimary from "./ModuleBtnPrimary";

export default function HomeRecruit() {
  return (
    <>
      <section id="home-recruit">
        <div class="sec-inner">
          <div class="content-width">
            <div class="content-box">
              <div class="img-area img-box">
                <Image
                  src="/images/home/recruit_01.jpg"
                  alt="採用情報"
                  class="fadein-trigger"
                  width="317"
                  height="400"
                />
                <Image
                  src="/images/home/recruit_02.jpg"
                  alt="採用情報"
                  class="fadein-trigger"
                  width="317"
                  height="400"
                />
                <Image
                  src="/images/home/recruit_03.jpg"
                  alt="採用情報"
                  class="fadein-trigger"
                  width="317"
                  height="400"
                />
                <Image
                  src="/images/home/recruit_04.jpg"
                  alt="採用情報"
                  class="fadein-trigger"
                  width="317"
                  height="400"
                />
              </div>
              <div class="txt-area">
                <div class="sec-ttl-box left-center fadein-trigger">
                  <h2 class="sec-ttl">recruit</h2>
                  <p class="sec-sub-ttl">採用情報</p>
                </div>
                <div class="cont">
                  <p class="txt">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit. Eligendi,
                    <br />
                    quia, praesentium cum ex earum, in perferendis
                  </p>
                  <BtnPrimary
                    url="recruit"
                    txt="採用情報はこちら"
                    class="btn-box"
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

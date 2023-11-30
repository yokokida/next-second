import Image from "next/image";
import { SectionTitle } from "./ModuleSectionTitle";

export default function RecruitIntro() {
  const occupations = [
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      img: "/images/page/recruit/img_02.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      img: "/images/page/recruit/img_03.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
  ];
  return (
    <>
      <section id="recruit-occupation">
        <div class="sec-inner pt0">
          <div class="content-width">
            <SectionTitle ttl="occupation" subttl="職種を知る" />
            <div class="content-box">
              {occupations.map((occupation) => (
                <div class="m-img-txt-box">
                  <div class="img-area">
                    <div class="img-box">
                      <Image
                        src={occupation["img"]}
                        alt="対応エリア"
                        width="500"
                        height="333"
                      />
                    </div>
                  </div>
                  <div class="txt-area">
                    <h3 class="title">{occupation["ttl"]}</h3>
                    <div class="txt">{occupation["txt"]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

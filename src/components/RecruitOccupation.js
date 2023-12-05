import { SectionTitle } from "./ModuleSectionTitle";
import { ImgTxtContainer, ImgTxtBox } from "./ModuleImgTxtBox";

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
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="occupation" subttl="職種を知る" />
          <ImgTxtContainer>
            {occupations.map((occupation) => (
              <ImgTxtBox
                imgSrc={occupation.img}
                imgClass="fadein-trigger"
                imgWidth="500"
                imgHeight="333"
                ttl={occupation.ttl}
                txt={occupation.txt}
              />
            ))}
          </ImgTxtContainer>
        </div>
      </section>
    </>
  );
}

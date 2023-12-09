import Header from "@/components/Header.js";
import ModuleMv from "@/components/ModuleMv.js";
import Footer from "@/components/Footer.js";
import { LayoutSection } from "@/components/LayoutSection";
import {
  ImgTxtWideContainer,
  ImgTxtContainer,
  ImgTxtBox,
  ImgTxtBoxVerticalTtl,
  ImgTxtBoxColumn,
} from "@/components/ModuleImgTxtBox";
import { SectionTitle } from "@/components/ModuleSectionTitle";
import { BtnPrimary } from "@/components/ModuleBtnPrimary";
import { LayoutPageNavi, PageNavigation } from "@/components/ModulePageNavi";
import { CtaBanner } from "@/components/ModuleCta";

export default function test() {
  const strengthes = [
    {
      img: "/images/page/business/strength_11.png",
      ttl: "信頼1",
      txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, distinctio voluptate. Aliquam voluptate nobis non deleniti aperiam natus assumenda, voluptatibus cum inventore laudantium, doloremque, ex sed. Maxime quo voluptate exercitationem!",
    },
    {
      img: "/images/page/business/strength_12.png",
      ttl: "信頼2",
      txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, distinctio voluptate. Aliquam voluptate nobis non deleniti aperiam natus assumenda, voluptatibus cum inventore laudantium, doloremque, ex sed. Maxime quo voluptate exercitationem!",
    },
    {
      img: "/images/page/business/strength_13.png",
      ttl: "信頼3",
      txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, distinctio voluptate. Aliquam voluptate nobis non deleniti aperiam natus assumenda, voluptatibus cum inventore laudantium, doloremque, ex sed. Maxime quo voluptate exercitationem!",
    },
  ];

  const navigations = [
    {
      ttlEn: "FLOW",
      ttlJa: "家づくりの流れ",
      btnLink: "/flow/",
      btnTxt: "詳しく見る",
    },
    {
      ttlEn: "FLOW",
      ttlJa: "家づくりの流れ",
      btnLink: "/flow/",
      btnTxt: "詳しく見る",
    },
    {
      ttlEn: "FLOW",
      ttlJa: "家づくりの流れ",
      btnLink: "/flow/",
      btnTxt: "詳しく見る",
    },
  ];

  return (
    <div id="wrapper">
      <Header />
      <main>
        <ModuleMv />
        <LayoutSection sectionId="test-01">
          <SectionTitle ttl="Title" subttl="タイトル" />
          <ImgTxtBoxColumn
            imgSrc="/images/page/business/strength_11.png"
            imgClass=""
            imgWidth="1000"
            imgHeight="500"
            txt="ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト"
          />
          <ImgTxtWideContainer>
            {strengthes.map((strength, index) => (
              <ImgTxtBoxVerticalTtl
                number={index + 1}
                imgSrc={strength.img}
                imgClass=""
                imgWidth="800"
                imgHeight="500"
                ttl={strength.ttl}
                txt={strength.txt}
              />
            ))}
          </ImgTxtWideContainer>
          <ImgTxtContainer>
            {strengthes.map((strength) => (
              <ImgTxtBox
                imgSrc={strength.img}
                imgClass=""
                imgWidth="480"
                imgHeight="310"
                ttl={strength.ttl}
                txt={strength.txt}
              />
            ))}
          </ImgTxtContainer>
        </LayoutSection>
        <LayoutSection sectionId="test-02">
          <SectionTitle ttl="Title" subttl="タイトル" />
          <p class="txt">ダミーテキストダミーテキストダミーテキスト</p>
          <BtnPrimary url="recruit" txt="モデルハウス見学" class="btn-box" />
        </LayoutSection>
        <LayoutSection sectionId="test-03">
          <LayoutPageNavi>
            {navigations.map((nav) => (
              <PageNavigation
                ttlEn={nav.ttlEn}
                ttlJa={nav.ttlJa}
                btnLink={nav.btnLink}
                btnTxt={nav.btnTxt}
              />
            ))}
          </LayoutPageNavi>
        </LayoutSection>
        <LayoutSection sectionId="test-04">
          <CtaBanner
            imgSrc="/images/page/recruit/img_01.jpg"
            imgAlt="採用情報"
            ttlJa="採用情報"
            ttlEn="RECRUIT"
            btnLink="/recruit/"
            btnTxt="採用情報はこちら"
          />
        </LayoutSection>
      </main>
      <Footer />
    </div>
  );
}

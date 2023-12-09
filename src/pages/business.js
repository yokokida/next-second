import Header from "@/components/Header.js";
import ModuleMv from "@/components/ModuleMv.js";
import Footer from "@/components/Footer.js";
import { LayoutSection, LayoutSectionPt0 } from "@/components/LayoutSection";
import { SectionTitle } from "@/components/ModuleSectionTitle";
import { ExampleContainer, ExampleBox } from "@/components/ModuleExample";
import {
  SquareBlockContainer,
  SquareBlockItem,
} from "@/components/ModuleSquareBlock";
import { ImgTxtBox } from "@/components/ModuleImgTxtBox";

export default function Business() {
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

  const services = [
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
  ];

  const clients = [
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
  ];

  const areas = [
    {
      img: "/images/page/business/strength_11.png",
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/business/strength_11.png",
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div id="wrapper">
      <Header />
      <main>
        <ModuleMv />
        <LayoutSection sectionId="business-intro">
          <SectionTitle ttl="strength" subttl="強み" />
          <ExampleContainer containerClass="m-example-container col-3">
            {strengthes.map((strength) => (
              <ExampleBox
                imgSrc={strength.img}
                imgClass=""
                imgWidth="365"
                imgHeight="274"
                ttl={strength.ttl}
                txt={strength.txt}
              />
            ))}
          </ExampleContainer>
        </LayoutSection>
        <LayoutSectionPt0 sectionId="business-service">
          <SectionTitle ttl="service" subttl="サービス" />
          <SquareBlockContainer containerClass="m-service-container">
            {services.map((service) => (
              <SquareBlockItem ttl={service.ttl} txt={service.txt} />
            ))}
          </SquareBlockContainer>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="business-client">
          <SectionTitle ttl="client" subttl="主要取引先" />
          <div class="m-rectangle-container">
            {clients.map((client) => (
              <div class="item-box">{client["ttl"]}</div>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="business-area">
          <SectionTitle ttl="area" subttl="対応エリア" />
          <ExampleContainer containerClass="m-example-container col-2">
            {areas.map((area) => (
              <ExampleBox
                imgSrc={area.img}
                imgClass=""
                imgWidth="365"
                imgHeight="274"
                ttl={area.ttl}
                txt={area.txt}
              />
            ))}
          </ExampleContainer>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="business-area">
          <SectionTitle ttl="quality" subttl="品質方針" />
          <ImgTxtBox
            imgSrc="/images/home/business_03.jpg"
            imgClass="fadein-trigger"
            imgWidth="495"
            imgHeight="300"
            ttl="ISO9001取得"
            txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumquefugiat velit quos eveniet magni rem dicta minus utnecessitatibus repellat debitis explicabo, harum, optio,doloremque voluptatibus laboriosam impedit cupiditate nostrum."
          />
        </LayoutSectionPt0>
      </main>
      <Footer />
    </div>
  );
}

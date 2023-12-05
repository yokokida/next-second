import { SectionTitle } from "./ModuleSectionTitle";
import { ImgTxtBox } from "./ModuleImgTxtBox";

export default function RecruitEnvironment() {
  const environments = [
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <section id="recruit-environment">
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="environment" subttl="働く環境" />
          {environments.map((env) => (
            <ImgTxtBox
              imgSrc={env.img}
              imgClass="fadein-trigger"
              imgWidth="600"
              imgHeight="400"
              ttl={env.ttl}
              txt={env.txt}
            />
          ))}
        </div>
      </section>
    </>
  );
}

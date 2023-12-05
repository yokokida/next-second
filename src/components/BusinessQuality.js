import { SectionTitle } from "./ModuleSectionTitle";
import { ImgTxtBox } from "./ModuleImgTxtBox";

export default function BusinessQuality() {
  return (
    <>
      <section id="business-quality">
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="quality" subttl="品質方針" />
          <ImgTxtBox
            imgSrc="/images/home/business_03.jpg"
            imgClass="fadein-trigger"
            imgWidth="495"
            imgHeight="300"
            ttl="ISO9001取得"
            txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumquefugiat velit quos eveniet magni rem dicta minus utnecessitatibus repellat debitis explicabo, harum, optio,doloremque voluptatibus laboriosam impedit cupiditate nostrum."
          />
        </div>
      </section>
    </>
  );
}

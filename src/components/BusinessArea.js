import Image from "next/image";
import { SectionTitle } from "./ModuleSectionTitle";

export default function BusinessArea() {
  const areas = [
    {
      ttl: "U字工事",
      img: "/images/page/business/strength_11.png",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      ttl: "U字工事",
      img: "/images/page/business/strength_11.png",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <section id="business-area">
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="area" subttl="対応エリア" />
          <div class="m-example-container col-2">
            {areas.map((area) => (
              <div class="item-box">
                <div class="img-area">
                  <div class="img-box">
                    <Image
                      src={area["img"]}
                      alt="対応エリア"
                      width="365"
                      height="274"
                    />
                  </div>
                </div>
                <div class="txt-area">
                  <h3 class="title">{area["ttl"]}</h3>
                  <p class="txt zenkaku">{area["txt"]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

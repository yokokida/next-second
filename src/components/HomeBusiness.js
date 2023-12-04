import Image from "next/image";
import BtnPrimary from "./ModuleBtnPrimary";

export default function HomeBisness() {
  const images = [
    {
      src: "/images/home/business_01.jpg",
      alt: "事業内容1",
      width: "428",
      height: "379",
    },
    {
      src: "/images/home/business_02.jpg",
      alt: "事業内容1",
      width: "428",
      height: "509",
    },
    {
      src: "/images/home/business_03.jpg",
      alt: "事業内容1",
      width: "550",
      height: "292",
    },
  ];

  return (
    <>
      <section id="home-business">
        <div class="sec-inner content-width">
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
              {images.map((img) => (
                <Image
                  src={img.src}
                  alt={img.alt}
                  class="fadein-trigger"
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

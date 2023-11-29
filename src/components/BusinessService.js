import Image from "next/image";
import SectionTitle from "./ModuleSectionTitle";

export default function BusinessService() {
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

  const images = [
    {
      src: "/images/home/business_01.jpg",
      width: "428",
      height: "379",
    },
    {
      src: "/images/home/business_02.jpg",
      width: "428",
      height: "509",
    },
    {
      src: "/images/home/business_03.jpg",
      width: "550",
      height: "292",
    },
  ];

  return (
    <>
      <section id="business-service">
        <div class="sec-inner pt0">
          <div class="content-width">
            <SectionTitle ttl="service" subttl="サービス" />
            <div class="content-box">
              <div class="m-service-container">
                {services.map((service) => (
                  <div class="item-box">
                    <h3 class="ttl">{service["ttl"]}</h3>
                    <p class="txt">{service["txt"]}</p>
                  </div>
                ))}
              </div>
              <div class="img-area">
                {images.map((img) => (
                  <Image
                    src={img.src}
                    alt="事業内容"
                    class="fadein-trigger"
                    width={img.width}
                    height={img.height}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

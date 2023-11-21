import Image from "next/image";
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

  return (
    <>
      <section id="business-service">
        <div class="sec-inner pt0">
          <div class="content-width">
            <div class="sec-ttl-box fadein-trigger is-active">
              <h2 class="sec-ttl">service</h2>
              <p class="sec-sub-ttl">サービス</p>
            </div>
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
                <Image
                  src="/images/home/business_01.jpg"
                  alt="事業内容1"
                  class="fadein-trigger"
                  width="428"
                  height="379"
                />
                <Image
                  src="/images/home/business_02.jpg"
                  alt="事業内容2"
                  class="fadein-trigger"
                  width="428"
                  height="509"
                />
                <Image
                  src="/images/home/business_03.jpg"
                  alt="事業内容3"
                  class="fadein-trigger"
                  width="550"
                  height="292"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

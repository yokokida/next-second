import { SectionTitle } from "./ModuleSectionTitle";
import { SquareBlockContainer, SquareBlockItem } from "./ModuleSquareBlock";

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
        <div class="sec-inner content-width pt0">
          <SectionTitle ttl="service" subttl="サービス" />
          <SquareBlockContainer containerClass="m-service-container">
            {services.map((service) => (
              <SquareBlockItem ttl={service.ttl} txt={service.txt} />
            ))}
          </SquareBlockContainer>
        </div>
      </section>
    </>
  );
}

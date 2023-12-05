import { SectionTitle } from "./ModuleSectionTitle";
import { ExampleBox, ExampleContainer } from "./ModuleExample";

export default function BusinessStrength() {
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

  return (
    <>
      <section id="business-strength">
        <div class="sec-inner content-width">
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
        </div>
      </section>
    </>
  );
}

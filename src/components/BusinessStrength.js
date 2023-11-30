import { SectionTitle } from "./ModuleSectionTitle";

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
        <div class="sec-inner">
          <div class="content-width">
            <SectionTitle ttl="strength" subttl="強み" />
            <div class="content-box">
              <div class="m-example-container col-3">
                {strengthes.map((strength) => (
                  <div class="item-box">
                    <div class="img-area">
                      <div class="img-box thumb">
                        <img
                          src={strength["img"]}
                          alt="強み"
                          width="365"
                          height="274"
                        />
                      </div>
                    </div>
                    <div class="txt-area">
                      <h3 class="ttl">{strength["ttl"]}</h3>
                      <p class="txt">{strength["txt"]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { ImgTxtBoxReverse } from "./ModuleImgTxtBox";

function AboutIntro() {
  return (
    <section id="about-intro">
      <div class="sec-inner content-width">
        <div class="content-box">
          <ImgTxtBoxReverse
            img="/images/home/business_01.jpg"
            ttl="タイトル"
            subttl="ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト"
          />
        </div>
      </div>
    </section>
  );
}

export { AboutIntro };

import BtnPrimary from "./ModuleBtnPrimary";
import { SectionTitleVertical } from "./ModuleSectionTitle";

export default function HomeAbout() {
  return (
    <>
      <div id="home-about">
        <div class="sec-inner">
          <div class="content-width">
            <SectionTitleVertical ttl="about us" subttl="私たちについて" />
            <div class="content-box">
              <p class="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Commodi, dignissimos mollitia similique deserunt, et facere
                <br />
                dolorem aperiam laboriosam nemo eveniet id quod quis architecto?
                Voluptatem aliquid eligendi consequunturrecusandae laudantium.
              </p>
              <BtnPrimary url="about" txt="会社情報はこちら" class="btn-box" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

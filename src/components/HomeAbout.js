import BtnPrimary from "./ModuleBtnPrimary";

export default function HomeAbout() {
  return (
    <>
      <div id="home-about">
        <div class="sec-inner">
          <div class="content-width">
            <div class="sec-ttl-box vertical left-center fadein-trigger">
              <h2 class="sec-ttl">about us</h2>
              <p class="sec-sub-ttl">私たちについて</p>
            </div>
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

import { SectionTitle } from "./ModuleSectionTitle.js";
import BtnPrimary from "./ModuleBtnPrimary.js";

export default function HomeNews() {
  return (
    <>
      <section id="home-news">
        <div class="sec-inner">
          <div class="content-width">
            <div class="sec-ttl-wrapper left-center">
              <SectionTitle ttl="news" subttl="お知らせ" />
              <div class="post-cats">
                <span class="post-cat tab">すべて</span>
              </div>
            </div>
            <div class="content-box">
              <div class="m-post-container panel is-show"></div>
              <BtnPrimary
                url="blog"
                txt="一覧はこちら"
                class="btn-box right-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

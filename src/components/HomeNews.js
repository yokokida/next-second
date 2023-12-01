import Link from "next/link";
import { SectionTitle } from "./ModuleSectionTitle.js";
import BtnPrimary from "./ModuleBtnPrimary.js";

export default function HomeBisness({ blogs }) {
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
              <div class="m-post-container panel is-show">
                {blogs}
                {/* {blogs.map((blogs) => (
                  <div class="item-box">
                    <div class="post-info">
                      <div class="post-meta">
                        <time datetime="2023.8.1" class="post-date">
                          2023.8.1
                        </time>
                        <div class="post-cats">
                          <Link class="post-cat">お知らせ</Link>
                        </div>
                      </div>
                      <h3 class="post-ttl">
                        <Link>{blogs.title}</Link>
                      </h3>
                    </div>
                  </div>
                ))} */}
              </div>
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

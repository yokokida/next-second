import Link from "next/link";
import { SectionTitle } from "./ModuleSectionTitle";
import BtnPrimary from "./ModuleBtnPrimary";

export default function HomeBisness() {
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
                <div class="item-box">
                  <div class="post-info">
                    <div class="post-meta">
                      <time datetime="2023.8.1" class="post-date">
                        2023.8.1
                      </time>
                      <div class="post-cats">
                        <Link href="/blog/" class="post-cat">
                          お知らせ
                        </Link>
                      </div>
                    </div>
                    <h3 class="post-ttl">
                      <Link href="/blog/26/">
                        ホームページをリニューアルしました
                      </Link>
                    </h3>
                  </div>
                </div>
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

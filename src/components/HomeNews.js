export default function HomeBisness() {
  return (
    <>
      <section id="home-news">
        <div class="sec-inner">
          <div class="content-width">
            <div class="sec-ttl-wrapper left-center">
              <div class="sec-ttl-box fadein-trigger">
                <h2 class="sec-ttl">news</h2>
                <p class="sec-sub-ttl">お知らせ</p>
              </div>
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
                        <a href="/blog/" class="post-cat">
                          お知らせ
                        </a>
                      </div>
                    </div>
                    <h3 class="post-ttl">
                      <a href="/blog/26/">ホームページをリニューアルしました</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div class="btn-box right-center">
                <a href="/blog/" class="btn btn-primary">
                  <span>一覧はこちら</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

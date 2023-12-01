import { client } from "../../libs/client.js";
import Header from "../../components/Header.js";
import ModuleMv from "../../components/ModuleMv.js";
import Footer from "../../components/Footer.js";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
}

export default function BlogId() {
  return (
    <>
      <Header />
      <main>
        <ModuleMv />
        <div class="single-content">
          <div class="content-width">
            <div id="article-container" class="has-sidebar">
              <div id="entry-article">
                <div class="entry-ttl-box">
                  <div class="post-meta">
                    <time datetime="2023.8.29" class="post-date">
                      2023.8.29
                    </time>
                    <div class="post-cats">
                      <a class="post-cat" href="/info/">
                        お知らせ
                      </a>
                    </div>
                  </div>
                  <h1 class="post-ttl">ホームページをリニューアルしました</h1>
                </div>

                <div class="entry-content"></div>

                <div id="nav-below">
                  <span>前の記事はありません</span>
                  <a href="/info/" class="btn btn-border pc-only">
                    <span>一覧に戻る</span>
                  </a>
                  <span>次の記事はありません</span>
                </div>
                <a href="/info/" class="btn btn-border sp-only">
                  <span>一覧に戻る</span>
                </a>
              </div>
              <div id="entry-sidebar">
                <div class="sidebar-container">
                  <h2 class="head">カテゴリー</h2>
                  <div class="cont">
                    <div class="post-cats">
                      <a class="post-cat" href="/info/">
                        お知らせ
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sidebar-container">
                  <h2 class="head">最新の記事</h2>
                  <div class="cont">
                    <div class="m-side-container">
                      <div class="item-box post-26 post type-post status-publish format-standard hentry category-info">
                        <div class="post-thumb">
                          <a href="/info/26/" class="img-box">
                            <img
                              src="/wp-content/themes/nsk-theme/images/common/noimage.jpg"
                              alt="ホームページをリニューアルしました"
                            />
                          </a>
                        </div>
                        <div class="post-info">
                          <div class="post-meta">
                            <time datetime="2023.8.29" class="post-date">
                              2023.8.29
                            </time>
                          </div>
                          <h3 class="post-ttl">
                            <a href="/info/26/">
                              ホームページをリニューアルしました
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

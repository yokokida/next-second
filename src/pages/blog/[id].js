import { client } from "@/libs/client.js";
import Header from "@/components/Header.js";
import ModuleMv from "@/components/ModuleMv.js";
import Footer from "@/components/Footer.js";
import { Sidebox, SideCategory, SidePost } from "@/components/Sidebar";

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const dataContent = await client.get({ endpoint: "blogs", contentId: id });
  const dataBlog = await client.get({ endpoint: "blogs" });
  const dataCategory = await client.get({ endpoint: "categories" });

  return {
    props: {
      post: dataContent,
      blogs: dataBlog.contents,
      categories: dataCategory.contents,
      // currentPost,
      // prevPost,
      // nextPost,
    },
  };
}

export default function Blog({ post, blogs, categories }) {
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
                    <time datetime={post.publishedAt} class="post-date">
                      {new Date(post.publishedAt)
                        .toLocaleDateString("ja-JP")
                        .split("/")
                        .join(".")}
                    </time>
                    <div class="post-cats">
                      <a class="post-cat" href="/blog/">
                        {post.category.name}
                      </a>
                    </div>
                  </div>
                  <h1 class="post-ttl">{post.title}</h1>
                </div>

                <div
                  class="entry-content"
                  dangerouslySetInnerHTML={{
                    __html: `${post.content}`,
                  }}
                ></div>

                <div id="nav-below">
                  <span>前の記事はありません</span>
                  <a href="/blog/" class="btn btn-border pc-only">
                    <span>一覧に戻る</span>
                  </a>
                  <span>次の記事はありません</span>
                </div>
                <a href="/blog/" class="btn btn-border sp-only">
                  <span>一覧に戻る</span>
                </a>
              </div>

              <div id="entry-sidebar">
                <Sidebox head="カテゴリー">
                  <div class="post-cats">
                    {categories.map((category) => (
                      <SideCategory link={category.id} name={category.name} />
                    ))}
                  </div>
                </Sidebox>
                <Sidebox head="最新記事">
                  <div class="m-side-container">
                    {blogs.map((blog) => (
                      <SidePost
                        link={`/blog/${blog.id}`}
                        publishedAt={blog.publishedAt}
                        title={blog.title}
                      />
                    ))}
                  </div>
                </Sidebox>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

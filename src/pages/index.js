import { client } from "@/libs/client";
import { SectionTitle } from "@/components/ModuleSectionTitle";
import BtnPrimary from "@/components/ModuleBtnPrimary";
import LoopPost from "@/components/LoopPost";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import HomeMv from "@/components/HomeMv.js";
import HomeAbout from "@/components/HomeAbout.js";
import HomeBusiness from "@/components/HomeBusiness.js";
import HomeRecruit from "@/components/HomeRecruit.js";

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
}

export default function Home({ blogs }) {
  return (
    <div id="wrapper">
      <Header />
      <main>
        <HomeMv />
        <HomeAbout />
        <HomeBusiness />
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
                  {blogs.map((content) => (
                    <LoopPost
                      id={content.id}
                      publishedAt={content.publishedAt}
                      categoryName={content.category.name}
                      title={content.title}
                    />
                  ))}
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
        <HomeRecruit />
      </main>
      <Footer />
    </div>
  );
}

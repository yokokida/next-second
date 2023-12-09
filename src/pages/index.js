import Image from "next/image";
import { client } from "@/libs/client.js";
import {
  SectionTitle,
  SectionTitleLeftcenter,
  SectionTitleVertical,
} from "@/components/ModuleSectionTitle.js";
import BtnPrimary from "@/components/ModuleBtnPrimary.js";
import { LoopPost } from "@/components/LoopPost.js";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import HomeMv from "@/components/HomeMv.js";
import { LayoutSection } from "@/components/LayoutSection.js";

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
}

export default function Home({ blogs }) {
  const bizImages = [
    {
      src: "/images/home/business_01.jpg",
      alt: "事業内容1",
      width: "428",
      height: "379",
    },
    {
      src: "/images/home/business_02.jpg",
      alt: "事業内容1",
      width: "428",
      height: "509",
    },
    {
      src: "/images/home/business_03.jpg",
      alt: "事業内容1",
      width: "550",
      height: "292",
    },
  ];

  const recruitImages = [
    {
      src: "/images/home/recruit_01.jpg",
      alt: "採用情報",
      width: "317",
      height: "400",
    },
    {
      src: "/images/home/recruit_02.jpg",
      alt: "採用情報",
      width: "317",
      height: "400",
    },
    {
      src: "/images/home/recruit_03.jpg",
      alt: "採用情報",
      width: "317",
      height: "400",
    },
    {
      src: "/images/home/recruit_04.jpg",
      alt: "採用情報",
      width: "317",
      height: "400",
    },
  ];

  return (
    <div id="wrapper">
      <Header />
      <main>
        <HomeMv />
        <LayoutSection sectionId="home-about">
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
        </LayoutSection>
        <LayoutSection sectionId="home-business">
          <SectionTitleLeftcenter ttl="business" subttl="事業内容" />
          <div class="content-box">
            <div class="txt-area center-left">
              <p class="txt">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Dignissimos ipsa dolore
              </p>
              <BtnPrimary
                url="business"
                txt="事業内容はこちら"
                class="btn-box"
              />
            </div>
            <div class="img-area">
              {bizImages.map((img) => (
                <Image
                  src={img.src}
                  alt={img.alt}
                  class="fadein-trigger"
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>
          </div>
        </LayoutSection>
        <LayoutSection sectionId="home-news">
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
        </LayoutSection>
        <LayoutSection sectionId="home-recruit">
          <div class="content-box">
            <div class="img-area img-box">
              {recruitImages.map((img) => (
                <Image
                  src={img.src}
                  alt={img.alt}
                  class="fadein-trigger"
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>
            <div class="txt-area">
              <SectionTitleLeftcenter ttl="recruit" subttl="採用情報" />
              <div class="cont">
                <p class="txt">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipisicing elit. Eligendi,
                  <br />
                  quia, praesentium cum ex earum, in perferendis
                </p>
                <BtnPrimary
                  url="recruit"
                  txt="採用情報はこちら"
                  class="btn-box"
                />
              </div>
            </div>
          </div>
        </LayoutSection>
      </main>
      <Footer />
    </div>
  );
}

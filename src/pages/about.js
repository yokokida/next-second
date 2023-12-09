import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModuleMv from "@/components/ModuleMv.js";
import {
  SectionTitle,
  SectionTitleContentWidth,
} from "@/components/ModuleSectionTitle";
import { ImgTxtBoxReverse } from "@/components/ModuleImgTxtBox";
import { LayoutSection, LayoutSectionPt0 } from "@/components/LayoutSection";

export default function About() {
  const outlines = [
    {
      head: "商号",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "代表者",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "資本金",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "社員数",
      cont: "テストテキストテストテキスト",
    },
  ];

  const licenses = [
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
  ];

  const histories = [
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
  ];

  return (
    <div id="wrapper">
      <Header />
      <main>
        <ModuleMv />
        <LayoutSection sectionId="about-intro">
          <ImgTxtBoxReverse
            img="/images/home/business_01.jpg"
            ttl="タイトル"
            subttl="ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト"
          />
        </LayoutSection>
        <LayoutSectionPt0 sectionId="about-outline">
          <SectionTitle ttl="outline" subttl="会社概要" />
          <div class="m-dl-container">
            {outlines.map((outline) => (
              <dl>
                <dt>{outline["head"]}</dt>
                <dd>{outline["cont"]}</dd>
              </dl>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="about-license">
          <SectionTitle ttl="license" subttl="取得資格" />
          <ul class="m-list-container">
            {licenses.map((license) => (
              <li>{license["name"]}</li>
            ))}
          </ul>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="about-history">
          <SectionTitle ttl="history" subttl="沿革" />
          <div class="m-dl-container">
            {histories.map((history) => (
              <dl>
                <dt>{history.head}</dt>
                <dd>{history.cont}</dd>
              </dl>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="about-access">
          <SectionTitleContentWidth ttl="access" subttl="アクセス" />
          <div class="content-box">
            <div class="content-width-narrow">
              <div class="headquarters">
                <h3 class="ttl ttl-large">本社</h3>
                <div class="img-box">
                  <Image
                    src="/images/home/business_03.jpg"
                    alt="事業内容3"
                    class="fadein-trigger"
                    width="920"
                    height="476"
                  />
                </div>
                <div class="txt-area">
                  <div class="txt">
                    <p>〒950-2001 新潟県新潟市西区青山新町</p>
                    <p>
                      TEL.
                      <a href="tel:000-000-0000" class="inter tel">
                        000-000-0000
                      </a>
                    </p>
                  </div>
                  <div class="btn-wrap">
                    <a href="" class="c-maps ex_link" target="_blank">
                      GoogleMapsはこちら
                    </a>
                  </div>
                </div>
              </div>
              <div class="branches">
                <div class="txt-area">
                  <h3 class="ttl ttl-large">西蒲営業所</h3>
                  <div class="txt">
                    <p>〒950-2001 新潟県新潟市西区青山新町-3</p>
                    <p>
                      TEL.
                      <a href="tel:080-9553-8864" class="inter tel">
                        080-9553-8864
                      </a>
                        
                      <br class="sp-only" />
                      FAX. <span class="inter">0256-72-2430</span>
                    </p>
                  </div>
                </div>
                <div class="btn-wrap">
                  <a href="" class="c-maps ex_link" target="_blank">
                    GoogleMapsはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </LayoutSectionPt0>
      </main>
      <Footer />
    </div>
  );
}

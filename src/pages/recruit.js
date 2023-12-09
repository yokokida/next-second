import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header.js";
import ModuleMv from "@/components/ModuleMv.js";
import Footer from "@/components/Footer.js";
import {
  LayoutSection,
  LayoutSectionPt0,
  LayoutSectionPt0WithoutWidth,
} from "@/components/LayoutSection";
import { ImgTxtContainer, ImgTxtBox } from "@/components/ModuleImgTxtBox";
import {
  SectionTitle,
  SectionTitleContentWidth,
} from "@/components/ModuleSectionTitle";
import { DlDtDd } from "@/components/ModuleDlContainer";
import ModuleForm from "@/components/ModuleForm";
import BtnPrimary from "@/components/ModuleBtnPrimary";

export default function Recruit() {
  const occupations = [
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      img: "/images/page/recruit/img_02.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      img: "/images/page/recruit/img_03.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
  ];

  const interviews = [
    {
      img: "/images/page/recruit/img_01.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
    {
      img: "/images/page/recruit/img_02.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
    {
      img: "/images/page/recruit/img_03.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
    {
      img: "/images/page/recruit/img_03.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
  ];

  const environments = [
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const datum = [
    {
      img: "",
      alt: "データで見る株式会社OO",
    },
    {
      img: "",
      alt: "データで見る株式会社OO",
    },
    {
      img: "",
      alt: "データで見る株式会社OO",
    },
  ];

  const studentConditionTables = [
    {
      head: "業務内容",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務地",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務時間",
      cont: "8：00～17：00（休憩60分）\n\n\n現場によっては、緊急の時間外対応、夜間工事があります。",
    },
    {
      head: "休日休暇",
      cont: "原則週休二日制：日曜日、祝日、その他（会社カレンダーによります）<br>その他、有給休暇、夏期休暇、年末年始休暇<br>年間休日数：110日",
    },
    {
      head: "福利厚生",
      cont: "社会保険、健康保険、厚生年金保険、雇用保険、労災保険、資格取得支援制度、財形貯蓄制度、制服貸与、定期健康診断、退職金共済加入制度",
    },
    {
      head: "給与",
      cont: "大学卒 215,000円～<br>高校卒 200,000円～<br>昇給：年1回<br>試用期間：3か月<br>試用期間中の労働条件：同条件",
    },
  ];

  const careerConditionTables = [
    {
      head: "業務内容",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務地",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務時間",
      cont: "8：00～17：00（休憩60分）<br><br>現場によっては、緊急の時間外対応、夜間工事があります。",
    },
    {
      head: "休日休暇",
      cont: "原則週休二日制：日曜日、祝日、その他（会社カレンダーによります）<br>その他、有給休暇、夏期休暇、年末年始休暇<br>年間休日数：110日",
    },
    {
      head: "福利厚生",
      cont: "社会保険、健康保険、厚生年金保険、雇用保険、労災保険、資格取得支援制度、財形貯蓄制度、制服貸与、定期健康診断、退職金共済加入制度",
    },
    {
      head: "給与",
      cont: "大学卒 215,000円～<br>高校卒 200,000円～<br>昇給：年1回<br>試用期間：3か月<br>試用期間中の労働条件：同条件",
    },
  ];

  return (
    <div id="wrapper">
      <Header />
      <main>
        <ModuleMv />
        <LayoutSection sectionId="recruit-intro">
          <div class="content-box">
            <p class="message">
              地域の発展のために、
              <br class="sp-only" />
              生活インフラを整えます
              <br />
              株式会社OOは、
              <span class="motion-bg-green bg-slide-trigger">
                一人一人の尊厳を尊重
              </span>
              します。
            </p>
          </div>
        </LayoutSection>
        <LayoutSectionPt0 sectionId="recruit-occupation">
          <SectionTitle ttl="occupation" subttl="職種を知る" />
          <ImgTxtContainer>
            {occupations.map((occupation) => (
              <ImgTxtBox
                imgSrc={occupation.img}
                imgClass="fadein-trigger"
                imgWidth="500"
                imgHeight="333"
                ttl={occupation.ttl}
                txt={occupation.txt}
              />
            ))}
          </ImgTxtContainer>
        </LayoutSectionPt0>
        <LayoutSectionPt0WithoutWidth sectionId="recruit-interview">
          <SectionTitleContentWidth ttl="interview" subttl="社員インタビュー" />
          <div class="m-interview-list">
            {interviews.map((interview) => (
              <Link href="/interview/01/" class="item-box fadein-trigger">
                <div class="img-box">
                  <Image
                    src={interview["img"]}
                    alt="採用情報インタビュー"
                    class="fadein-trigger"
                    width="400"
                    height="520"
                  />
                </div>
                <div class="txt-box">
                  <p class="name">
                    <span class="ja">{interview["nameJa"]}</span>
                    <span class="en">{interview["nameEn"]}</span>
                  </p>
                  <p class="info">
                    {interview["role"]}/{interview["year"]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <BtnPrimary
            url="interview"
            txt="一覧はこちら"
            class="btn-box center-center"
          />
        </LayoutSectionPt0WithoutWidth>
        <LayoutSectionPt0 sectionId="recruit-environment">
          <SectionTitle ttl="environment" subttl="働く環境" />
          {environments.map((env) => (
            <ImgTxtBox
              imgSrc={env.img}
              imgClass="fadein-trigger"
              imgWidth="600"
              imgHeight="400"
              ttl={env.ttl}
              txt={env.txt}
            />
          ))}
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="recruit-data">
          <SectionTitle ttl="data of oo" subttl="データで見る株式会社OO" />
          <div class="data-container">
            {datum.map((data) => (
              <div class="img-box">
                <Image
                  src={data.img}
                  alt={data.alt}
                  class="fadein-trigger"
                  width="359"
                  height="359"
                />
              </div>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="recruit-requirement">
          <SectionTitle ttl="requirement" subttl="募集要項" />
          <div class="content-box">
            <div class="m-tab-panel">
              <ul class="tab-group">
                <li class="tab is-active">
                  <span>新卒採用</span>
                </li>
                <li class="tab">
                  <span>中途採用</span>
                </li>
              </ul>
              <div class="panel-group">
                <div class="panel is-show">
                  <h3 class="ttl ttl-large">新卒採用</h3>
                  <div class="m-dl-container">
                    {studentConditionTables.map((condition) => (
                      <DlDtDd head={condition.head} cont={condition.cont} />
                    ))}
                  </div>
                </div>
                <div class="panel">
                  <h3 class="ttl ttl-large">中途採用</h3>
                  <div class="m-dl-container">
                    {careerConditionTables.map((condition) => (
                      <DlDtDd head={condition.head} cont={condition.cont} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="recruit-entry">
          <SectionTitle ttl="entry" subttl="エントリー" />
          <div id="form-box">
            <form action="https://ssgform.com/s/hOOcV8reaXzU" method="POST">
              <ModuleForm />
            </form>
          </div>
        </LayoutSectionPt0>
      </main>
      <Footer />
    </div>
  );
}

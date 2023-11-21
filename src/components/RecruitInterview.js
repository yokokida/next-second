import Image from "next/image";
import Link from "next/link";

export default function RecruitInterview() {
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
      img: "/images/page/recruit/img_04.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
  ];
  return (
    <>
      <section id="recruit-interview">
        <div class="sec-inner pt0">
          <div class="sec-ttl-box fadein-trigger">
            <div class="content-width">
              <h2 class="sec-ttl">interview</h2>
              <p class="sec-sub-ttl">社員インタビュー</p>
            </div>
          </div>
          <div class="content-box">
            <div class="m-interview-list">
              {interviews.map((interview) => (
                <Link
                  href="/interview/01/"
                  class="item-box fadein-trigger is-active"
                >
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
            <div class="btn-box center-center">
              <Link href="/interview/" class="btn btn-primary">
                <span>一覧はこちら</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

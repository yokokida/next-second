import Image from "next/image";
import Link from "next/link";

export default function HomeMv() {
  const MvImages = [
    { img: "../images/home/mv_01.jpg" },
    { img: "../images/home/mv_02.jpg" },
    { img: "../images/home/mv_03.jpg" },
  ];

  return (
    <>
      <div id="home-header">
        <div class="logo-box">
          <div class="img-box">
            <a href="/">
              <Image
                src="../images/common/logo_01.svg"
                alt="株式会社"
                width="120"
                height="36"
              />
            </a>
          </div>
        </div>
        <nav class="nav-box">
          <ul id="menu-g-nav-1" class="h-menu">
            <li class="menu-item">
              <Link href="/">トップ</Link>
            </li>
            <li class="menu-item">
              <Link href="/about/">私たちについて</Link>
            </li>
            <li class="menu-item">
              <Link href="/business/">事業紹介</Link>
            </li>
            <li class="menu-item">
              <Link href="/info/">お知らせ</Link>
            </li>
            <li class="menu-item">
              <Link href="/contact/">お問い合わせ</Link>
            </li>
          </ul>
          <Link href="/recruit/" class="btn-recruit">
            <span>採用情報</span>
          </Link>
        </nav>
      </div>
      <div id="home-mv">
        <div class="mv-inner">
          <div id="home-mv-slider" class="m-swiper-container">
            <div class="swiper">
              <div class="swiper-wrapper">
                {MvImages.map((img) => (
                  <div class="swiper-slide">
                    <Image
                      src={img}
                      alt="株式会社"
                      class="fadein-trigger"
                      width="1900"
                      height="1266"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="txt-area">
            <p class="txt">
              テストコピー
              <br />
              テストコピーテストコピー
              <br />
              テストコピーテストコピー
              <br />
              テストコピー
              <br />
            </p>
            <h2 class="ttl">
              未来に、
              <br />
              <span class="zenkaku">｢紡ぐ」</span>しごと。
            </h2>
          </div>
          <a href="#home-about" class="scroll">
            scroll
          </a>
        </div>
      </div>
    </>
  );
}

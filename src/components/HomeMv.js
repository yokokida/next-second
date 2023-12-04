import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import "swiper/css";

export default function HomeMv() {
  const MvImages = [
    { src: "/images/home/mv_01.jpg" },
    { src: "/images/home/mv_02.jpg" },
    { src: "/images/home/mv_03.jpg" },
  ];
  const menus = [
    {
      url: "/",
      txt: "トップ",
    },
    {
      url: "/about/",
      txt: "私たちについて",
    },
    {
      url: "/business/",
      txt: "事業紹介",
    },
    {
      url: "/info/",
      txt: "お知らせ",
    },
    {
      url: "/contact/",
      txt: "お問い合わせ",
    },
  ];
  return (
    <>
      <div id="home-header">
        <div class="logo-box">
          <div class="img-box">
            <a href="/">
              <Image
                src="/images/common/logo_01.svg"
                alt="株式会社"
                width="120"
                height="36"
              />
            </a>
          </div>
        </div>
        <nav class="nav-box">
          <ul id="menu-g-nav-1" class="h-menu">
            {menus.map((menu) => (
              <li class="menu-item">
                <Link href={menu.url}>{menu.txt}</Link>
              </li>
            ))}
          </ul>
          <Link href="/recruit/" class="btn-recruit">
            <span>採用情報</span>
          </Link>
        </nav>
      </div>
      <div id="home-mv">
        <div class="mv-inner">
          <div id="home-mv-slider" class="m-swiper-container">
            <Swiper
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
            >
              {MvImages.map((img) => (
                <SwiperSlide>
                  <Image
                    src={img.src}
                    width={1900}
                    height={1266}
                    // className="fadein-trigger"
                    alt="ASTRO"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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

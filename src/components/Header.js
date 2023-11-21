import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header id="header">
        <div class="h-inner">
          <div class="h-function">
            <h1 class="logo-box">
              <a href="/" class="img-box">
                <Image
                  src="/images/common/logo_01.svg"
                  alt="株式会社"
                  width="146"
                  height="31"
                />
              </a>
            </h1>
          </div>
          <nav class="nav-area">
            <ul id="menu-g-nav" class="h-menu">
              <li class="menu-item">
                <Link href="/" aria-current="page">
                  トップ
                </Link>
              </li>
              <li class="menu-item">
                <Link href="/about/">私たちについて</Link>
              </li>
              <li class="menu-item">
                <Link href="/business/">事業紹介</Link>
              </li>
              <li class="menu-item">
                <Link href="/blog/">お知らせ</Link>
              </li>
              <li class="menu-item">
                <Link href="/contact/">お問い合わせ</Link>
              </li>
            </ul>
            <Link href="/recruit/" class="btn-recruit">
              <span>採用情報</span>
            </Link>
          </nav>
          <div id="btn-hamburger">
            <span class="border"></span>
            <span class="border"></span>
          </div>
        </div>
        <div id="sp-menu">
          <nav>
            <ul id="menu-sp-nav" class="sp-nav">
              <li class="menu-item">
                <Link href="">
                  <span class="en">top</span>
                  <br />
                  <span class="ja">トップ</span>
                </Link>
              </li>
              <li class="menu-item">
                <Link href="/about/">
                  <span class="en">about us</span>
                  <br />
                  <span class="ja">私たちについて</span>
                </Link>
              </li>
              <li class="menu-item">
                <Link href="/business/">
                  <span class="en">business</span>
                  <br />
                  <span class="ja">事業紹介</span>
                </Link>
              </li>
              <li class="menu-item">
                <Link href="/blog/">
                  <span class="en">news</span>
                  <br />
                  <span class="ja">お知らせ</span>
                </Link>
              </li>
              <li class="menu-item">
                <Link href="/recruit/">
                  <span class="en">recruit</span>
                  <br />
                  <span class="ja">採用情報</span>
                </Link>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <Link href="/recruit/#recruit-occupation">仕事を知る</Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/recruit/#recruit-interview">
                      社員インタビュー
                    </Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/recruit/#recruit-environment">働く環境</Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/recruit/#recruit-requirement">募集要項</Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/recruit/#recruit-entry">エントリー</Link>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <Link href="/contact/">
                  <span class="en">contact</span>
                  <br />
                  <span class="ja">お問い合わせ</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div class="info-area">
            <div class="img-box">
              <Image
                src="/images/common/logo_01.svg"
                alt="株式会社"
                width="146"
                height="31"
              />
            </div>
            <p class="address">
              〒000-0000
              <br />
              新潟県新潟市
              <br />
              TEL.
              <a href="tel:00000000000" class="tel">
                00000000000
              </a>
              / FAX. 000000000
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

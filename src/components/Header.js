export default function Header() {
  return (
    <>
      <header id="header">
        <div class="h-inner">
          <div class="h-function">
            <h1 class="logo-box">
              <a href="/" class="img-box">
                <img
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
                <a href="/" aria-current="page">
                  トップ
                </a>
              </li>
              <li class="menu-item">
                <a href="/about/">私たちについて</a>
              </li>
              <li class="menu-item">
                <a href="/business/">事業紹介</a>
              </li>
              <li class="menu-item">
                <a href="/blog/">お知らせ</a>
              </li>
              <li class="menu-item">
                <a href="/contact/">お問い合わせ</a>
              </li>
            </ul>
            <a href="/recruit/" class="btn-recruit">
              <span>採用情報</span>
            </a>
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
                <a href="">
                  <span class="en">top</span>
                  <br />
                  <span class="ja">トップ</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="/about/">
                  <span class="en">about us</span>
                  <br />
                  <span class="ja">私たちについて</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="/business/">
                  <span class="en">business</span>
                  <br />
                  <span class="ja">事業紹介</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="/blog/">
                  <span class="en">news</span>
                  <br />
                  <span class="ja">お知らせ</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="/recruit/">
                  <span class="en">recruit</span>
                  <br />
                  <span class="ja">採用情報</span>
                </a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="/recruit/#recruit-occupation">仕事を知る</a>
                  </li>
                  <li class="menu-item">
                    <a href="/recruit/#recruit-interview">社員インタビュー</a>
                  </li>
                  <li class="menu-item">
                    <a href="/recruit/#recruit-environment">働く環境</a>
                  </li>
                  <li class="menu-item">
                    <a href="/recruit/#recruit-requirement">募集要項</a>
                  </li>
                  <li class="menu-item">
                    <a href="/recruit/#recruit-entry">エントリー</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="/contact/">
                  <span class="en">contact</span>
                  <br />
                  <span class="ja">お問い合わせ</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="info-area">
            <div class="img-box">
              <img
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

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div class="f-inner">
          <div class="content-width">
            <div class="info-area">
              <a href="https://github.com/yokokida" class="img-box">
                <img
                  src="/images/common/logo_01.svg"
                  alt="株式会社"
                  width="200"
                  height="80"
                />
              </a>
              <p class="address">
                〒000-0000
                <br />
                新潟県新潟市西区
                <br />
                TEL.
                <a href="0000000000" class="tel">
                  0000000000
                </a>
              </p>
            </div>
            <div class="menu-area">
              <nav class="menu-box sp-only">
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
                        <a href="/recruit/#recruit-interview">
                          社員インタビュー
                        </a>
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
              <nav class="menu-box pc-only">
                <ul class="menu-list">
                  <li class="menu-item">
                    <a href="">トップ</a>
                  </li>
                  <li class="menu-item">
                    <a href="/about/">私たちについて</a>
                  </li>
                </ul>
                <ul class="menu-list">
                  <li class="menu-item">
                    <a href="/business/">事業内容</a>
                  </li>
                  <li class="menu-item">
                    <a href="/blog/">お知らせ</a>
                  </li>
                </ul>
                <ul class="menu-list">
                  <li class="menu-item">
                    <a href="/recruit/">採用情報</a>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <a href="/recruit/#recruit-find">仕事を知る</a>
                      </li>
                      <li class="menu-item">
                        <a href="/recruit/#recruit-interview">
                          社員インタビュー
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="/recruit/#recruit-env">働く環境</a>
                      </li>
                      <li class="menu-item">
                        <a href="/recruit/#recruit-data">データで見る</a>
                      </li>
                      <li class="menu-item">
                        <a href="/recruit/#recruit-requirement">募集要項</a>
                      </li>
                      <li class="menu-item">
                        <a href="/recruit/#recruit-entry">エントリー</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="menu-list">
                  <li class="menu-item">
                    <a href="/contact/">お問い合わせ</a>
                  </li>
                  <li class="menu-item">
                    <a href="/privacy-policy/">プライバシーポリシー</a>
                  </li>
                </ul>
              </nav>
            </div>
            <a href="#" class="to-top">
              page top
            </a>
          </div>
        </div>
        <div class="copyright">
          <p>&copy;All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
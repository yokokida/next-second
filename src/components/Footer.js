import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div class="f-inner">
          <div class="content-width">
            <div class="info-area">
              <a href="https://github.com/yokokida" class="img-box">
                <Image
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
                <a href="tel:0000000000" class="tel">
                  0000000000
                </a>
              </p>
            </div>
            <div class="menu-area">
              <nav class="menu-box sp-only">
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
                        <Link href="/recruit/#recruit-occupation">
                          仕事を知る
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-interview">
                          社員インタビュー
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-environment">
                          働く環境
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-requirement">
                          募集要項
                        </Link>
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
              <nav class="menu-box pc-only">
                <ul class="menu-list">
                  <li class="menu-item">
                    <Link href="">トップ</Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/about/">私たちについて</Link>
                  </li>
                </ul>
                <ul class="menu-list">
                  <li class="menu-item">
                    <Link href="/business/">事業内容</Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/blog/">お知らせ</Link>
                  </li>
                </ul>
                <ul class="menu-list">
                  <li class="menu-item">
                    <Link href="/recruit/">採用情報</Link>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-find">仕事を知る</Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-interview">
                          社員インタビュー
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-env">働く環境</Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-data">データで見る</Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-requirement">
                          募集要項
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link href="/recruit/#recruit-entry">エントリー</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="menu-list">
                  <li class="menu-item">
                    <Link href="/contact/">お問い合わせ</Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/privacy-policy/">プライバシーポリシー</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Link href="#" class="to-top">
              page top
            </Link>
          </div>
        </div>
        <div class="copyright">
          <p>&copy;All Rights Reserved.</p>
        </div>
      </footer>
      <script src="/scripts/myscript.js"></script>
    </>
  );
}

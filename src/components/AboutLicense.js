export default function AboutLicense() {
  const licenses = [
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
  ];
  return (
    <>
      <section id="about-license">
        <div class="sec-inner pt0">
          <div class="content-width">
            <div class="sec-ttl-box fadein-trigger is-active">
              <h2 class="sec-ttl">license</h2>
              <p class="sec-sub-ttl">取得資格</p>
            </div>
            <div class="content-box">
              <ul class="m-list-container">
                {licenses.map((license) => (
                  <li>{license["name"]}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

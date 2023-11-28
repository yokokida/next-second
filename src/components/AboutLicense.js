import SectionTitle from "./ModuleSectionTitle";

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
            <SectionTitle ttl="license" subttl="取得資格" />
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

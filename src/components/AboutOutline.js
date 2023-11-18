export default function AboutOutline() {
  const outlines = [
    {
      head: "商号",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "代表者",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "資本金",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "社員数",
      cont: "テストテキストテストテキスト",
    },
  ];
  return (
    <>
      <section id="about-outline">
        <div class="sec-inner pt0">
          <div class="content-width">
            <div class="sec-ttl-box fadein-trigger is-active">
              <h2 class="sec-ttl">outline</h2>
              <p class="sec-sub-ttl">会社概要</p>
            </div>
            <div class="content-box">
              <div class="m-dl-container">
                {outlines.map((outline) => (
                  <dl>
                    <dt>{outline["head"]}</dt>
                    <dd>{outline["cont"]}</dd>
                  </dl>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

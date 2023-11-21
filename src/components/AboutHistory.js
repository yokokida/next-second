export default function AboutOutline() {
  const outlines = [
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
  ];
  return (
    <section id="about-history">
      <div class="sec-inner pt0">
        <div class="content-width">
          <div class="sec-ttl-box fadein-trigger is-active">
            <h2 class="sec-ttl">history</h2>
            <p class="sec-sub-ttl">沿革</p>
          </div>
          <div class="content-box">
            <div class="m-dl-container">
              {outlines.map((outline) => (
                <dl>
                  <dt>{outline.head}</dt>
                  <dd>{outline.cont}</dd>
                </dl>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

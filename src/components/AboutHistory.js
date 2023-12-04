import { SectionTitle } from "./ModuleSectionTitle";

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
      <div class="sec-inner content-width pt0">
        <SectionTitle ttl="history" subttl="沿革" />
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
    </section>
  );
}

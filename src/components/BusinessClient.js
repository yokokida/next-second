import { SectionTitle } from "./ModuleSectionTitle";

export default function BusinessClient() {
  const clients = [
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
  ];

  return (
    <>
      <section id="business-client">
        <div class="sec-inner pt0">
          <div class="content-width">
            <SectionTitle ttl="client" subttl="主要取引先" />
            <div class="content-box">
              <div class="m-rectangle-container">
                {clients.map((client) => (
                  <div class="item-box">{client["ttl"]}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

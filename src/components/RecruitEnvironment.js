export default function RecruitEnvironment() {
  const environments = [
    {
      img: "../images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "../images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "../images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <section id="recruit-environment">
        <div class="sec-inner pt0">
          <div class="content-width">
            <div class="sec-ttl-box fadein-trigger is-active">
              <h2 class="sec-ttl">environment</h2>
              <p class="sec-sub-ttl">働く環境</p>
            </div>
            <div class="content-box">
              {environments.map((env) => (
                <div class="m-img-txt-box">
                  <div class="img-area">
                    <div class="img-box">
                      <img
                        src={env["img"]}
                        alt="対応エリア"
                        width="600"
                        height="400"
                      />
                    </div>
                  </div>
                  <div class="txt-area">
                    <h3 class="title">{env["ttl"]}</h3>
                    <div class="txt">{env["txt"]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

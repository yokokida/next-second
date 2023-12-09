function SectionTitle(props) {
  return (
    <>
      <div class="sec-ttl-box fadein-trigger">
        <h2 class="sec-ttl">{props.ttl}</h2>
        <p class="sec-sub-ttl">{props.subttl}</p>
      </div>
    </>
  );
}

function SectionTitleLeftcenter(props) {
  return (
    <>
      <div class="sec-ttl-box left-center fadein-trigger">
        <h2 class="sec-ttl">{props.ttl}</h2>
        <p class="sec-sub-ttl">{props.subttl}</p>
      </div>
    </>
  );
}

function SectionTitleVertical(props) {
  return (
    <>
      <div class="sec-ttl-box fadein-trigger vertical left-center">
        <h2 class="sec-ttl">{props.ttl}</h2>
        <p class="sec-sub-ttl">{props.subttl}</p>
      </div>
    </>
  );
}

function SectionTitleContentWidth(props) {
  return (
    <>
      <div class="sec-ttl-box fadein-trigger">
        <div class="content-width">
          <h2 class="sec-ttl">{props.ttl}</h2>
          <p class="sec-sub-ttl">{props.subttl}</p>
        </div>
      </div>
    </>
  );
}

export {
  SectionTitle,
  SectionTitleLeftcenter,
  SectionTitleVertical,
  SectionTitleContentWidth,
};

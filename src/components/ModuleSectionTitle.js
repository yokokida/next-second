export default function SectionTitle(props) {
  return (
    <>
      <div class="sec-ttl-box fadein-trigger">
        <h2 class="sec-ttl">{props.ttl}</h2>
        <p class="sec-sub-ttl">{props.subttl}</p>
      </div>
    </>
  );
}

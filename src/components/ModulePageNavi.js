import Link from "next/link";

function LayoutPageNavi({ children }) {
  return (
    <>
      <div class="m-nav-container">{children}</div>
    </>
  );
}

function PageNavigation(props) {
  return (
    <>
      <div class="item-box">
        <div class="ttl-box">
          <p class="sec-sub-ttl">{props.ttlEn}</p>
          <h2 class="ttl ttl-l matchHeight">{props.ttlJa}</h2>
        </div>
        <div class="btn-box">
          <Link href={props.btnLink} class="btn btn-border">
            {props.btnTxt}
          </Link>
        </div>
      </div>
    </>
  );
}

export { LayoutPageNavi, PageNavigation };

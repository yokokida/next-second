import Link from "next/link";
import Image from "next/image";

function CtaColumnHasTxt(props) {
  return (
    <>
      <div class="item-box">
        <div class="ttl-wrap">
          <div class="img-box">
            <Image
              src="/images/common/catalog_01.png"
              alt=""
              width="300"
              height="300"
            />
          </div>
          <div class="txt-box">
            <div class="ttl-box">
              <p class="sec-sub-ttl">{props.subttl}</p>
              <h2 class="sec-ttl">{props.ttl}</h2>
            </div>
            <p class="txt">{props.txt}</p>
          </div>
        </div>
        <div class="btn-box">
          <Link
            href={props.btnUrl}
            class="btn btn-size-m icon-circle-arrow btn-yellow"
          >
            {props.btnTxt}
          </Link>
        </div>
      </div>
    </>
  );
}

function CtaBanner(props) {
  return (
    <>
      <div class="m-img-txt-box">
        <div class="img-area">
          <div class="img-box">
            <Image
              src={props.imgSrc}
              alt={props.imgAlt}
              width="500"
              height="300"
            />
          </div>
        </div>
        <div class="txt-area">
          <div class="sub-ttl ten-mincho ttl-m">{props.ttlJa}</div>
          <h2 class="sec-ttl">{props.ttlEn}</h2>
          <div class="btn-box">
            <Link
              href={props.btnLink}
              class="btn btn-block icon-circle-arrow btn-size-m"
            >
              {props.btnTxt}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function CtaContainer(props) {
  return (
    <>
      <div class="m-contact-container contact">
        <div class="sec-ttl-box">
          <h2 class="sec-ttl sec-ttl-ja border-bottom-center">{props.ttl}</h2>
        </div>
        <p class="txt center-center">{props.leadtxt}</p>
        <div class="btn-wrap">
          <a href={props.btnLink1} class="btn btn-gold">
            <span class="icon-mail">{props.btnTxt1}</span>
          </a>
          <a href={props.btnLink2} class="btn btn-gold">
            <span class="icon-mail">{props.btnTxt2}</span>
          </a>
        </div>
        <div class="tel-box">
          <div class="head">
            <div class="bold">お電話からのご相談</div>
            <div class="time">{props.time}</div>
          </div>
          <a href={`tel:${props.tel}`} class="tel">
            {props.tel}
          </a>
        </div>
      </div>
    </>
  );
}

export { CtaColumnHasTxt, CtaBanner, CtaContainer };

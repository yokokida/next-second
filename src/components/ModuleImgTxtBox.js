import Image from "next/image";

function ImgTxtContainer({ children }) {
  return (
    <>
      <div class="m-img-txt-container">{children}</div>
    </>
  );
}

function ImgTxtWideContainer({ children }) {
  return (
    <>
      <div class="m-img-txt-wide-container">{children}</div>
    </>
  );
}

function ImgTxtBox(props) {
  return (
    <>
      <div class="m-img-txt-box">
        <div class="img-area">
          <div class="img-box">
            <Image
              src={props.imgSrc}
              alt={props.ttl}
              class={props.imgClass}
              width={props.imgWidth}
              height={props.imgHeight}
            />
          </div>
        </div>
        <div class="txt-area">
          <h3 class="title">{props.ttl}</h3>
          <p class="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

function ImgTxtBoxReverse(props) {
  return (
    <>
      <div class="m-img-txt-box reverse">
        <div class="img-area">
          <div class="img-box">
            <Image
              src={props.img}
              alt={props.ttl}
              class="fadein-trigger"
              width="428"
              height="379"
            />
          </div>
        </div>
        <div class="txt-area">
          <h3 class="title">{props.ttl}</h3>
          <div class="txt">{props.subttl}</div>
        </div>
      </div>
    </>
  );
}

function ImgTxtBoxVerticalTtl(props) {
  var num = ("0" + props.number).slice(-2);
  return (
    <>
      <div class="m-img-txt-box">
        <div class="img-area">
          <div class="img-box">
            <Image
              src={props.imgSrc}
              alt={props.ttl}
              class={props.imgClass}
              width={props.imgWidth}
              height={props.imgHeight}
            />
          </div>
        </div>
        <div class="txt-area">
          <div class="vertical-ttl-box">
            <span class="index-num">{num}</span>
            <h3 class="title vertical">{props.ttl}</h3>
          </div>
          <p class="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

function ImgTxtBoxColumn(props) {
  return (
    <>
      <div class="m-img-txt-box-column">
        <div class="img-area">
          <div class="img-box">
            <Image
              src={props.imgSrc}
              alt={props.ttl}
              class={props.imgClass}
              width={props.imgWidth}
              height={props.imgHeight}
            />
          </div>
        </div>
        <div class="txt-area">
          <p class="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

export {
  ImgTxtContainer,
  ImgTxtWideContainer,
  ImgTxtBox,
  ImgTxtBoxReverse,
  ImgTxtBoxVerticalTtl,
  ImgTxtBoxColumn,
};

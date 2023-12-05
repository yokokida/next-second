import Image from "next/image";

function ImgTxtContainer({ children }) {
  return (
    <>
      <div class="m-img-txt-container">{children}</div>
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

export { ImgTxtContainer, ImgTxtBox, ImgTxtBoxReverse };

import Image from "next/image";

function ExampleContainer({ children, containerClass }) {
  return (
    <>
      <div class={containerClass}>{children}</div>
    </>
  );
}

function ExampleBox(props) {
  return (
    <>
      <div class="item-box">
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
          <h3 class="ttl">{props.ttl}</h3>
          <p class="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

export { ExampleContainer, ExampleBox };

function SquareBlockContainer({ children, containerClass }) {
  return (
    <>
      <div class={containerClass}>{children}</div>
    </>
  );
}

function SquareBlockItem(props) {
  return (
    <>
      <div class="item-box">
        <h3 class="ttl">{props.ttl}</h3>
        <p class="txt">{props.txt}</p>
      </div>
    </>
  );
}

export { SquareBlockContainer, SquareBlockItem };

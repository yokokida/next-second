function DlContainer({ children }) {
  return (
    <>
      <div class="m-dl-container">{children}</div>
    </>
  );
}

function DlDtDd(props) {
  return (
    <>
      <dl>
        <dt>{props.head}</dt>
        <dd>{props.cont}</dd>
      </dl>
    </>
  );
}

export { DlContainer, DlDtDd };

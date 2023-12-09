function LayoutSection({ sectionId, children }) {
  return (
    <>
      <section id={sectionId}>
        <div class="sec-inner content-width">{children}</div>
      </section>
    </>
  );
}

export { LayoutSection };

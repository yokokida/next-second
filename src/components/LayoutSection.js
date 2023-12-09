function LayoutSection({ sectionId, children }) {
  return (
    <>
      <section id={sectionId}>
        <div class="sec-inner content-width">{children}</div>
      </section>
    </>
  );
}

function LayoutSectionPt0({ sectionId, children }) {
  return (
    <>
      <section id={sectionId}>
        <div class="sec-inner content-width pt0">{children}</div>
      </section>
    </>
  );
}

export { LayoutSection, LayoutSectionPt0 };

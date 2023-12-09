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

function LayoutSectionPt0WithoutWidth({ sectionId, children }) {
  return (
    <>
      <section id={sectionId}>
        <div class="sec-inner pt0">{children}</div>
      </section>
    </>
  );
}

function LayoutSectionWithoutWidthInner({ sectionId, children }) {
  return (
    <>
      <section id={sectionId}>{children}</section>
    </>
  );
}

export {
  LayoutSection,
  LayoutSectionPt0,
  LayoutSectionPt0WithoutWidth,
  LayoutSectionWithoutWidthInner,
};

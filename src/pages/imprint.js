import React from "react";
import { LegalSection, Page, Seo } from "v2";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}

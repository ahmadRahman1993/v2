import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="About Me" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="aboutme" heading="About Me" />
      </Page>
    </>
  );
}

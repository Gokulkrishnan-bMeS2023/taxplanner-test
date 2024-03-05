import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import FAQsection from "@/components/FAQSection";
import { contentWithPriceCardContents } from "@/component-contents/tds-return-27-q/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/tds-return-27-q/AboutThisPlan";
import { documents } from "@/component-contents/tds-return-27-q/DocumentSubmitted";
import { FAQs } from "@/component-contents/tds-return-27-q/FAQSection";
import { Container } from "@chakra-ui/react";

const RocFiling = () => {
  return (
    <>
      <Container
        maxW={{
          base: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        }}
        px={6}
      >
        <ContentWithPriceCard contents={contentWithPriceCardContents} />
        <AboutThisPlan
          aboutContents={aboutPlanContent}
          planContents={aboutPlanCardContent}
          title="About this plan"
        />
        <DocumentComponent
          title="TDS Returns - Payments outside India (Form 27Q)"
          documents={documents}
        />
        <FAQsection
          servicesDatas={FAQs}
          heading={"Frequently Asked Questions"}
        />
      </Container>
    </>
  );
};

export default RocFiling;

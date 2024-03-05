import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import FAQsection from "@/components/FAQSection";
import { contentWithPriceCardContents } from "@/component-contents/tds-return-26-qb/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/tds-return-26-qb/AboutThisPlan";
import { documents } from "@/component-contents/tds-return-26-qb/DocumentSubmitted";
import { FAQs } from "@/component-contents/tds-return-26-qb/FAQSection";
import { Container } from "@chakra-ui/react";

const TDSReturn26QB = () => {
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
          title="TDS Return on Sale of Property (Form 26QB)"
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

export default TDSReturn26QB;

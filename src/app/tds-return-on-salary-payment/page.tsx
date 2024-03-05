import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import { contentWithPriceCardContents } from "@/component-contents/roc-filing/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/roc-filing/AboutThisPlan";
import { documents } from "@/component-contents/roc-filing/DocumentSubmitted";
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
          title="TDS Return on Salary Payment (Form 24Q)"
          documents={documents}
        />
      </Container>
    </>
  );
};

export default RocFiling;

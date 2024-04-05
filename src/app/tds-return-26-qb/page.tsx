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
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function TDSReturnonSaleofProperty() {
  return (
    <>
      <Header heading="TDS Return on Sale of Property (Form 26QB)" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={contentWithPriceCardContents}
            FilingType="TDSForm26QB"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <AboutThisPlan
            aboutContents={aboutPlanContent}
            planContents={aboutPlanCardContent}
            title="About this plan"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <DocumentComponent
            title="TDS Return on Sale of Property (Form 26QB)"
            documents={documents}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <FAQsection
            servicesDatas={FAQs}
            heading={"Frequently Asked Questions"}
          />
        </Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}

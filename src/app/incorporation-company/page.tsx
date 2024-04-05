import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import FAQsection from "@/components/FAQSection";
import { contentWithPriceCardContents } from "@/component-contents/incorporation-company/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/incorporation-company/AboutThisPlan";
import { documents } from "@/component-contents/incorporation-company/DocumentSubmitted";
import { FAQs } from "@/component-contents/incorporation-company/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function IncorporationCompany() {
  return (
    <>
      <Header heading="Incorporation Company" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={contentWithPriceCardContents}
            FilingType="Company"
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
            title="Incorporation Company"
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

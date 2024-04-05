import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import { contentWithPriceCardContents } from "@/component-contents/tds-return-on-salary-payment/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/tds-return-on-salary-payment/AboutThisPlan";
import { documents } from "@/component-contents/tds-return-on-salary-payment/DocumentSubmitted";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function TDSReturnonSalaryPayment() {
  return (
    <>
      <Header heading="TDS Return on Salary Payment" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={contentWithPriceCardContents}
            FilingType="TDSForm24Q"
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
            title="TDS Return on Salary Payment (Form 24Q)"
            documents={documents}
          />
        </Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}

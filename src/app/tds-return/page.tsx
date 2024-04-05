import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import { contentWithPriceCardContents } from "@/component-contents/tds-return/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/tds-return/AboutThisPlan";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function TDSReturn() {
  return (
    <>
      <Header heading="TDS Return" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={contentWithPriceCardContents}
            FilingType="TDSForm26Q"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <AboutThisPlan
            aboutContents={aboutPlanContent}
            planContents={aboutPlanCardContent}
            title="About this plan"
          />
        </Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}

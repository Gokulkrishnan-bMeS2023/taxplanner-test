"use client";
import { Box, Container } from "@chakra-ui/react";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import { ContentWithPriceCardContents } from "@/component-contents/itr-u-updated-income-tax-return/ContentWithPriceCard";
import { FAQs } from "@/component-contents/itr-u-updated-income-tax-return/FAQSection";
import {
  AboutThisPlanCardContent,
  AboutThisPlanContent,
} from "@/component-contents/itr-u-updated-income-tax-return/AboutThisPlan";
import Header from "@/components/Header";

export default function ItrIncomeTax() {
  return (
    <>
      <Header heading="ITR U" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={ContentWithPriceCardContents}
            FilingType="ITR"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <AboutThisPlan
            title="About This Plan"
            planContents={AboutThisPlanCardContent}
            aboutContents={AboutThisPlanContent}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <FAQSection
            heading="Frequently Asked Questions"
            servicesDatas={FAQs}
          />
        </Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}

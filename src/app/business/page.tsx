"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/incometax-business-profession/AboutThisPlan";
import { Documents } from "@/component-contents/incometax-business-profession/DocumentSubmitted";
import { FAQs } from "@/component-contents/incometax-business-profession/FAQSection";
import TitleWithQueriesForm from "@/components/TitleWithQueriesForm";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import { BusinessQueriesFormContents } from "@/component-contents/incometax-business-profession/TitleWithQueriesForm";


export default function BusinessProfession() {
  return (
    <>
      <Container maxW={{ base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" }} px={6}>
      <Box my={{ base: 16, lg: 24 }}><TitleWithQueriesForm contents={BusinessQueriesFormContents} /></Box>
      <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="About This Plan" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box>
      <Box my={{ base: 16, lg: 24 }}><DocumentSubmitted title="Business or Profession" documents={Documents}  /></Box>
      <Box my={{ base: 16, lg: 24 }}><FAQSection
        heading="Frequently Asked Questions"
        servicesDatas={FAQs}/></Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}
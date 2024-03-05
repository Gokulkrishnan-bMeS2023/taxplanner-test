"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import { ContentWithPriceCardContents } from "@/component-contents/gst-amendments/ContentWithPriceCard";
import { AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/gst-amendments/AboutThisPlan";
import { Documents } from "@/component-contents/gst-amendments/DocumentSubmitted";


export default function Amendments() {
  return (
    <>
      <Container maxW={{ base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" }} px={6}>
        <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} /></Box>
        <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="About This Plan" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box> 
        <Box my={{ base: 16, lg: 24 }}><DocumentSubmitted  subcontent="Scanned copies of" title="GST Amendments" documents={Documents}  /></Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}
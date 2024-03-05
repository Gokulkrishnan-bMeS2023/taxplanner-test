"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import { AboutThisPlan2CardContent, AboutThisPlan2Content, AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/gst-refund/AboutThisPlan";
import { Documents } from "@/component-contents/gst-refund/DocumentSubmitted";
import { ContentWithPriceCardContents } from "@/component-contents/gst-refund/ContentWithPriceCard";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function GSTRefund() {
  return (
    <>
      <Container maxW={{ base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" }} px={6}>
      <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} /></Box>
      <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="Latest Update" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box>  
      <Box my={{ base: 16, lg: 24 }}><DocumentSubmitted 
           title="Gst Refund" documents={Documents} /></Box>
       <Box my={{ base: 16, lg: 24 }}><AboutThisPlan 
          title="RFD-07: Complete Adjustment/ Withholding of Refund" 
          planContents={AboutThisPlan2CardContent} aboutContents={AboutThisPlan2Content}/></Box>    
      </Container>
      <BGWithQueriesForm />
    </>
  );
}
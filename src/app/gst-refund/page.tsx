"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import { AboutThisPlan2CardContent, AboutThisPlan2Content, AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/gst-refund/AboutThisPlan";
import { Documents } from "@/component-contents/gst-refund/DocumentSubmitted";
import { ContentWithPriceCardContents } from "@/component-contents/gst-refund/ContentWithPriceCard";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";

export default function GSTRefund() {
  return (
    <>
      <Header heading="GST Refund" />
      <Container>
      <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} FilingType="Refunds"/></Box>
      <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="Latest Update" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box>  
      <Box my={{ base: 16, lg: 24 }}><DocumentSubmitted 
           titleContent="A GST Officer has to process the refund application within 60 days from the date of submission of application. If the amount of refund is admissible an order will be issued in RFD-06 electronically. The Refund Sanction Order contains the following details." 
           title="Gst Refund" documents={Documents} /></Box>
       <Box my={{ base: 16, lg: 24 }}><AboutThisPlan 
          title="RFD-07: Complete Adjustment/ Withholding of Refund" 
          planContents={AboutThisPlan2CardContent} aboutContents={AboutThisPlan2Content}/></Box>    
      </Container>
      <BGWithQueriesForm />
    </>
  );
}
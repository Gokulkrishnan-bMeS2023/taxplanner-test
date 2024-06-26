"use client";

import {
  GSTR1,
  GSTR3B,
  GSTReturnsLite,
  GSTReturnsLite1Year,
} from "@/component-contents/gst-return-services/TitleWithTwoCards";
import ScrollAnimation from "@/components/Animation/Scroll-Animation2";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TitleWithTwoCards from "@/components/TitleWithTwoCards";
import { Box, Container, Heading } from "@chakra-ui/react";

export default function GSTReturnServices() {
  return (
    <>
      <Header heading="GST Services" />
      <Container>
        <Box my={12} mb={6}>
          <ScrollAnimation>
            <Heading>All Services</Heading>
          </ScrollAnimation>
        </Box>
        <Box mb={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={GSTR1} FilingType="GSTReturns" />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={GSTR3B} FilingType="GSTReturns3B" />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={GSTReturnsLite}
            FilingType="GSTReturnsLite"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={GSTReturnsLite1Year}
            FilingType="GSTReturnsLiteOne"
          />
        </Box>
      </Container>
      <BGWithQueriesForm
        heading="All Services"
        buttonName="Request A Callback"
      />
      <Footer/>
    </>
  );
}

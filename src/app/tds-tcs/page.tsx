"use client";
import {
  TDSReturnOnSaleOfPropertyForm26Q,
  TDSReturnOnSalaryPaymentForm24Q,
  TDSReturnOnSaleOfPropertyForm26QB,
  TDSReturnsPaymentsOutsideIndiaForm27Q,
} from "@/component-contents/tds-tcs/TitleWithTwoCards";
import { Box, Container, Heading } from "@chakra-ui/react";
import TitleWithTwoCards from "@/components/TitleWithTwoCards";
import ScrollAnimation from "@/components/Animation/Scroll-Animation2";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Footer from "@/components/Footer";

export default function TDSTCS() {
  return (
    <>
      <Header heading=" TDS/TCS" />
      <Container>
        <ScrollAnimation>
          <Box my={12} mb={6}>
            <Heading>All Services</Heading>
          </Box>
        </ScrollAnimation>
        <Box mb={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={TDSReturnOnSaleOfPropertyForm26Q}
            FilingType="TDSForm26Q"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={TDSReturnOnSalaryPaymentForm24Q}
            FilingType="TDSForm24Q"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={TDSReturnOnSaleOfPropertyForm26QB}
            FilingType="TDSForm26QB"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={TDSReturnsPaymentsOutsideIndiaForm27Q}
            FilingType="TDSForm27Q"
          />
        </Box>
      </Container>
      <BGWithQueriesForm
        heading="All Services"
        buttonName="Request A Callback"
      />
      <Footer />
    </>
  );
}

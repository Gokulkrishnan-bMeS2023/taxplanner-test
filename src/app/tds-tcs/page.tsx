"use client";

import {
  TDSReturnOnSaleOfPropertyForm26Q,
  TDSReturnOnSalaryPaymentForm24Q,
  TDSReturnOnSaleOfPropertyForm26QB,
  TDSReturnsPaymentsOutsideIndiaForm27Q,
} from "@/component-contents/tds-tcs/TitleWithTwoCards";
import { Box, Container, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const TitleWithTwoCards = dynamic(
  () => import("@/components/TitleWithTwoCards")
);

export default function TDSTCS() {
  return (
    <Container>
      <Box my={12} mb={6}>
        <Heading>All Services</Heading>
      </Box>
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
  );
}

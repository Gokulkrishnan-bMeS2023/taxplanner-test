"use client";

import { TDSReturnOnSaleOfPropertyForm26Q, TDSReturnOnSalaryPaymentForm24Q, TDSReturnOnSaleOfPropertyForm26QB, TDSReturnsPaymentsOutsideIndiaForm27Q } from "@/component-contents/tds-tcs/TitleWithTwoCards";
import { StyledContainer } from "@/components/Styled/StyledContainer";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import TitleWithTwoCards from "@/components/TitleWithTwoCards";
import { Box, Heading } from "@chakra-ui/react";

export default function TDSTCS() {
  return (
    <>
      <StyledContainer>
        <Box my={12} mb={6}>
          <Heading>All Services</Heading>
        </Box>
        <Box mb={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={TDSReturnOnSaleOfPropertyForm26Q} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={TDSReturnOnSalaryPaymentForm24Q} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={TDSReturnOnSaleOfPropertyForm26QB} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={TDSReturnsPaymentsOutsideIndiaForm27Q} />
        </Box>
      </StyledContainer>
      <BGWithQueriesForm />
    </>
  );
}

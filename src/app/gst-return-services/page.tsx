"use client";

import { GSTR1, GSTR3B, GSTReturnsLite, GSTReturnsLite1Year } from "@/component-contents/gst-return-services/TitleWithTwoCards";
import { StyledContainer } from "@/components/Styled/StyledContainer";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import TitleWithTwoCards from "@/components/TitleWithTwoCards";
import { Box, Heading } from "@chakra-ui/react";

export default function GSTReturnServices() {
  return (
    <>
      <StyledContainer>
        <Box my={12} mb={6}>
          <Heading>All Services</Heading>
        </Box>
        <Box mb={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={GSTR1} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={GSTR3B} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={GSTReturnsLite} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={GSTReturnsLite1Year} />
        </Box>
      </StyledContainer>
      <BGWithQueriesForm />
    </>
  );
}

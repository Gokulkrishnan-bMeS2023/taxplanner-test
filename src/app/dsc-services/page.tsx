"use client";

import { DigitalSignatureForIndividualSigning, DigitalSignatureForEncryptedIndividual, DigitalSignatureForEncryptedOrganisation, DigitalSignatureForDGFTOf1IndividualAnd1Organisation, DigitalSignatureEncryptedOrganisation, DigitalSignatureForForeignCitizensAndNRIClass3 } from "@/component-contents/dsc-services/TitleWithTwoCards";
import { StyledContainer } from "@/components/Styled/StyledContainer";
import TitleWithTwoCards from "@/components/TitleWithTwoCards";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function DSCServices() {
  return (
    <>
      <StyledContainer>
        <Box my={12}>
          <Heading mb={6}>All Services</Heading>
          <Text mb={6}>
            Digital Signature is used for validating online transactions such as
            Income Tax Return E-Filing, Company or LLP Incorporation, Filing
            Annual Return, etc. Get you Digital Signature Certificate along with
            token.
          </Text>
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={DigitalSignatureForIndividualSigning} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={DigitalSignatureForEncryptedIndividual}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={DigitalSignatureForEncryptedOrganisation}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={DigitalSignatureForDGFTOf1IndividualAnd1Organisation}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards contents={DigitalSignatureEncryptedOrganisation} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <TitleWithTwoCards
            contents={DigitalSignatureForForeignCitizensAndNRIClass3}
          />
        </Box>
      </StyledContainer>
      <BGWithQueriesForm />
    </>
  );
}

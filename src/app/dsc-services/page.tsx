"use client";

import {
  DigitalSignatureForIndividualSigning,
  DigitalSignatureForEncriptedIndividual,
  DigitalSignatureForEncriptedOrganisation,
  DigitalSignatureForDGFTOf1IndividualAnd1Organisation,
  DigitalSignatureEncriptedOrganisation,
  DigitalSignatureForForeignCitizensAndNRIClass3,
} from "@/component-contents/dsc-services/TitleWithTwoCards";
import ScrollAnimation from "@/components/Animation/Scroll-Animation2";
import TitleWithTwoCards from "@/components/TitleWithTwoCards";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function DSCServices() {
  return (
    <Container>
      <ScrollAnimation>
        <Box my={12}>
          <Heading mb={6}>All Services</Heading>
          <Text mb={6}>
            Digital Signature is used for validating online transactions such as
            Income Tax Return E-Filing, Company or LLP Incorporation, Filing
            Annual Return, etc. Get you Digital Signature Certificate along with
            token.
          </Text>
        </Box>
      </ScrollAnimation>
      <Box my={{ base: 16, lg: 24 }}>
        <TitleWithTwoCards
          contents={DigitalSignatureForIndividualSigning}
          FilingType="DSC"
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <TitleWithTwoCards
          contents={DigitalSignatureForEncriptedIndividual}
          FilingType="DSCIndividual"
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <TitleWithTwoCards
          contents={DigitalSignatureForEncriptedOrganisation}
          FilingType="DSCOrganisation"
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <TitleWithTwoCards
          contents={DigitalSignatureForDGFTOf1IndividualAnd1Organisation}
          FilingType="DSCDGFT"
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <TitleWithTwoCards
          contents={DigitalSignatureEncriptedOrganisation}
          FilingType="DSCICEGATE"
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <TitleWithTwoCards
          contents={DigitalSignatureForForeignCitizensAndNRIClass3}
          FilingType="DSCNRI"
        />
      </Box>
    </Container>
  );
}

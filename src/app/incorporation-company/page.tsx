import { contentWithPriceCardContents } from "@/component-contents/incorporation-company/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/incorporation-company/AboutThisPlan";
import { documents } from "@/component-contents/incorporation-company/DocumentSubmitted";
import { FAQs } from "@/component-contents/incorporation-company/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
const ContentWithPriceCard = dynamic(
  () => import("@/components/ContentWithPriceCard")
);
const AboutThisPlan = dynamic(() => import("@/components/AboutThisPlan"));
const DocumentComponent = dynamic(
  () => import("@/components/DocumentSubmitted")
);
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);
const Header = dynamic(() => import("@/components/Header"));

export default function IncorporationCompany() {
  return (
    <>
      <Header heading="Incorporation Company" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={contentWithPriceCardContents}
            FilingType="Company"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <AboutThisPlan
            aboutContents={aboutPlanContent}
            planContents={aboutPlanCardContent}
            title="About this plan"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <DocumentComponent
            title="Incorporation Company"
            documents={documents}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <FAQSection
            servicesDatas={FAQs}
            heading={"Frequently Asked Questions"}
          />
        </Box>
      </Container>
      <BGWithQueriesForm />
      <Footer/>
    </>
  );
}

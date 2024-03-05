import { Container } from "@chakra-ui/react";
import FAQSection from "../FAQSection";


const Service: React.FC = () => {

 const ServicesDatas = [
   {
     id: 1,
     title: "Income Tax",
     active: "tab-pane-1",
     img: "assets/Taxplanner4.png",
     paragraph: [
       "For salaried, self-employed individuals, Partnership firms, LLPs, Companies.",
     ],
     Fs: [
       "Salaried & House Property Income",
       "Capital Gain",
       "NRI",
       "Business Or Profession",
       "TDS/TCS",
     ],
     href: "income_tax",
   },
   {
     id: 2,
     title: "GST",
     active: "tab-pane-2",
     img: "assets/Taxplanner1.png",
     paragraph: [
       "Get your GST Registration, File GST returns, Reply to GST notices, LUT.",
     ],
     Fs: ["Registration", "Amendments", "GST Returns", "LUT", "Refunds"],
     href: "gst",
   },
   {
     id: 3,
     title: "Incorporation",
     active: "tab-pane-3",
     img: "assets/Taxplanner3.png",
     paragraph: ["For incorporating Company's, LLPs and Partnership Firms."],
     Fs: ["Company", "LLP", "Partnership"],
     href: "incorporation",
   },
   {
     id: 4,
     title: "Other Services",
     active: "tab-pane-4",
     img: "assets/Taxplanner2.png",
     paragraph: [
       "TDS Returns, Digital Signature, MSME Registration, ROC filing, SFT.",
     ],
     Fs: [
       "MSME Registration",
       "IEC Registration/Renewal",
       "DSC",
       "ROC filing",
       "SFT",
     ],
     href: "other_services",
   },
 ];

  return (
    <>
       <Container maxW={{ base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" }} px={6}>
       <FAQSection servicesDatas={ServicesDatas} heading="Our Products" />   
      </Container>   
    </>
  );
};

export default Service;

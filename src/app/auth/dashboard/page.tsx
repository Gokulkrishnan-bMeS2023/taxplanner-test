import DashboardCard from "@/components/DashboardCard";
import SelectOption from "@/components/SelectOption";
import { Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Box paddingTop={"120px"} px={"1.5rem"}>
      <Box>
        <Text
          lineHeight={"1.5rem"}
          color={"rgba(0, 0, 0, 0.5)"}
          fontSize={"16px"}
          fontWeight={400}
        >
          File your Income Tax return with Tax Experts. Claim your tax benefits
          under Section 80C and other applicable sections.
        </Text>
      </Box>
      <Box width={"200px"} mt={6}>
        <SelectOption />
      </Box>

      <Box>
        <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
          <Text
            bg={"#00abed"}
            fontSize={"20px"}
            color={"#FFF"}
            p={"2px 15px"}
            display={"inline-block"}
          >
            Income Tax
          </Text>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
          mb={10}
        >
          <DashboardCard
            href="auth/admin/itr-filing/capital-gain/list?type=salaray"
            ImageSrc={"/assets/income-tax/administrator-male.webp"}
            ButtonLabel=" Salaried Person"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/income-tax/mortgage.webp"}
            ButtonLabel=" Capital Gain"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/income-tax/airport-building.webp"}
            ButtonLabel="NRI"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/income-tax/client-company.webp"}
            ButtonLabel="Business"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/income-tax/bill.webp"}
            ButtonLabel="TDS"
          />
        </Box>
      </Box>

      <Box>
        <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
          <Text
            bg={"#00abed"}
            fontSize={"20px"}
            color={"#FFF"}
            p={"2px 15px"}
            display={"inline-block"}
          >
            ITR U
          </Text>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
          mb={10}
        >
          <DashboardCard
            href="#"
            ImageSrc={"/assets/income-tax/client-company.webp"}
            ButtonLabel="ITR U"
          />
        </Box>
      </Box>

      <Box>
        <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
          <Text
            bg={"#00abed"}
            fontSize={"20px"}
            color={"#FFF"}
            p={"2px 15px"}
            display={"inline-block"}
          >
            GST
          </Text>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
          mb={10}
        >
          <DashboardCard
            href="#"
            ImageSrc={"/assets/gst/certification.webp"}
            ButtonLabel="GST Registration"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/gst/heck-for-payment.webp"}
            ButtonLabel="LUT"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/gst/cash-in-hand.webp"}
            ButtonLabel="Refunds"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/gst/check-book.webp"}
            ButtonLabel="Amendments"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/gst/receipt-approved.webp"}
            ButtonLabel="Returns"
          />
        </Box>
      </Box>

      <Box>
        <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
          <Text
            bg={"#00abed"}
            fontSize={"20px"}
            color={"#FFF"}
            p={"2px 15px"}
            display={"inline-block"}
          >
            Incorporation
          </Text>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
          mb={10}
        >
          <DashboardCard
            href="#"
            ImageSrc={"/assets/incorporation/organization.webp"}
            ButtonLabel="Company"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/incorporation/conference-call.webp"}
            ButtonLabel="Partnership"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/incorporation/appointment-scheduling.webp"}
            ButtonLabel="LLP"
          />
        </Box>
      </Box>

      <Box>
        <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
          <Text
            bg={"#00abed"}
            fontSize={"20px"}
            color={"#FFF"}
            p={"2px 15px"}
            display={"inline-block"}
          >
            Digital Signature
          </Text>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
          mb={10}
        >
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            ButtonLabel="DSC Class III"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            ButtonLabel="DSC Encrypted"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            ButtonLabel="DSC Organization"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            ButtonLabel="DSC DGFT"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            ButtonLabel="DSC ICEGATE"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            ButtonLabel="DSC NRI"
          />
        </Box>
      </Box>

      <Box>
        <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
          <Text
            bg={"#00abed"}
            fontSize={"20px"}
            color={"#FFF"}
            p={"2px 15px"}
            display={"inline-block"}
          >
            Other Services
          </Text>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
          mb={10}
        >
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/me.webp"}
            ButtonLabel="MSME Registration"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/water-transportation.webp"}
            ButtonLabel="IEC Registration"
          />
          <DashboardCard
            href="#"
            ImageSrc={"/assets/other-services/product-documents.webp"}
            ButtonLabel="ROC Filing"
          />
        </Box>
      </Box>
    </Box>
  );
}

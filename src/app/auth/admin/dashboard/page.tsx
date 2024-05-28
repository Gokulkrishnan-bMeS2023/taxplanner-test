import DashboardAdminCard from "@/components/DashboardAdminCard";
import { Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Box paddingTop={"120px"} px={"1.5rem"}>
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
        <Box>
          <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
            <Text
              bg={"#00abed"}
              fontSize={"20px"}
              color={"#FFF"}
              p={"2px 15px"}
              display={"inline-block"}
            >
              USERS COUNT
            </Text>
          </Box>
          <Box>
            <DashboardAdminCard
              ImageSrc={"/assets/incorporation/conference-call.webp"}
              Linkhref="#"
              LinkName="Users"
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
              RECENTLY REGISTERED
            </Text>
          </Box>
          <Box>
            <DashboardAdminCard
              ImageSrc={"/assets/incorporation/conference-call.webp"}
              Linkhref="#"
              LinkName="New Users"
            />
          </Box>
        </Box>
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
        <Box>
          <Box mt={4} borderBottom={"1px solid #DFE4FD"} mb={4}>
            <Text
              bg={"#00abed"}
              fontSize={"20px"}
              color={"#FFF"}
              p={"2px 15px"}
              display={"inline-block"}
            >
              ITR U COUNT
            </Text>
          </Box>
          <Box>
            <DashboardAdminCard
              ImageSrc={"/assets/income-tax/client-company.webp"}
              Linkhref="#"
              LinkName="ITR U"
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
              RENTAL RECEIPT COUNT
            </Text>
          </Box>
          <Box>
            <DashboardAdminCard
              ImageSrc={"/assets/gst/receipt-approved.webp"}
              Linkhref="#"
              LinkName="Rental Receipt"
            />
          </Box>
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
            Income Tax COUNT
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
          <DashboardAdminCard
            ImageSrc={"/assets/income-tax/administrator-male.webp"}
            Linkhref="/auth/admin/itr-filing/capital-gain/list?Type=GIHlAR7LjYeVXLM3zMs6hYPe/EyaTF08a1Ws7r2DhfU="
            LinkName=" Salaried Person"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/income-tax/mortgage.webp"}
            Linkhref="#"
            LinkName=" Capital Gain"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/income-tax/airport-building.webp"}
            Linkhref="#"
            LinkName="NRI"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/income-tax/client-company.webp"}
            Linkhref="#"
            LinkName="Business"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/income-tax/bill.webp"}
            Linkhref="#"
            LinkName="TDS"
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
            GST COUNT
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
          <DashboardAdminCard
            ImageSrc={"/assets/gst/certification.webp"}
            Linkhref="#"
            LinkName="GST Registration"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/gst/heck-for-payment.webp"}
            Linkhref="#"
            LinkName="LUT"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/gst/cash-in-hand.webp"}
            Linkhref="#"
            LinkName="Refunds"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/gst/check-book.webp"}
            Linkhref="#"
            LinkName="Amendments"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/gst/receipt-approved.webp"}
            Linkhref="#"
            LinkName="Returns"
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
            Incorporation COUNT
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
          <DashboardAdminCard
            ImageSrc={"/assets/incorporation/organization.webp"}
            Linkhref="#"
            LinkName="Company"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/incorporation/conference-call.webp"}
            Linkhref="#"
            LinkName="Partnership"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/incorporation/appointment-scheduling.webp"}
            Linkhref="#"
            LinkName="LLP"
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
            Digital Signature COUNT
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
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            Linkhref="#"
            LinkName="DSC Class III"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            Linkhref="#"
            LinkName="DSC Encrypted"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            Linkhref="#"
            LinkName="DSC Organization"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            Linkhref="#"
            LinkName="DSC DGFT"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            Linkhref="#"
            LinkName="DSC ICEGATE"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/usb-memory-stick.webp"}
            Linkhref="#"
            LinkName="DSC NRI"
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
            Other Services COUNT
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
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/me.webp"}
            Linkhref="#"
            LinkName="MSME Registration"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/water-transportation.webp"}
            Linkhref="#"
            LinkName="IEC Registration"
          />
          <DashboardAdminCard
            ImageSrc={"/assets/other-services/product-documents.webp"}
            Linkhref="#"
            LinkName="ROC Filing"
          />
        </Box>
      </Box>
    </Box>
  );
}

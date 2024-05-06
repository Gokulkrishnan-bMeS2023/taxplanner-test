import Footer from "@/components/DashboardFooter";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Box } from "@chakra-ui/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section color="black">
      <Box position={"relative"} color={"black"}>
        <DashboardNavbar />
        <Box
          backgroundImage={"/assets/carousel-3.png"}
          position={"absolute"}
          top={0}
          left={0}
          backgroundSize={"contain"}
          width={"100%"}
          height={"90vh"}
          zIndex={-1}
          backgroundRepeat={"no-repeat"}
        ></Box>
        {children}
        <Footer />
      </Box>
    </section>
  );
}

"use client";
import Carousel from "@/components/CarouselSlide";
import FAQSection from "@/components/FAQSection";
import About from "@/components/HomeAbout";
import Navbar from "@/components/Navbar";
import { FAQs } from "@/component-contents/home-ourproducts/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Features = dynamic(import("@/components/HomeFeature"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <Features />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <About />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <FAQSection servicesDatas={FAQs} heading="Our Products" />{" "}
        </Box>
      </Container>
    </>
  );
}

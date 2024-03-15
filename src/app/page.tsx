"use client";
import Carousel from "@/components/CarouselSlide";
import About from "@/components/HomeAbout";
import Features from "@/components/HomeFeature";
import Navbar from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Box my={{ base: 16, lg: 24 }}>
        <Features />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <About />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <OurProducts />
      </Box>
    </>
  );
}

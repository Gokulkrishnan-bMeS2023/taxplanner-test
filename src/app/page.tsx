"use client";
import Carousel from "@/components/CarouselSlide";
import About from "@/components/HomeAbout";
import Features from "@/components/HomeFeature";
import Service from "@/components/Service";


export default function Home() {
  return (
    <main >
      <Carousel />
      <Features />
      <About />
      <Service />
    </main>
  );
}

"use client";
import Carousel from "@/components/CarouselSlide";
import Header from "@/components/Header";
import About from "@/components/HomeAbout";
import Features from "@/components/HomeFeature";
import Service from "@/components/Service";


export default function Home() {
  return (
    <main >
      <Header heading={""} />
      <Carousel />
      <Features />
      <About />
      <Service />
    </main>
  );
}

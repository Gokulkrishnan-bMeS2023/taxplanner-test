import Header from "@/components/Header";
import type { Metadata } from "next";
// import dynamic from "next/dynamic";
// const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Tax Planner - Capital Gain",
  description: "",
};

export default function CapitalGainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Capital Gain" />
      {children}
    </>
  );
}

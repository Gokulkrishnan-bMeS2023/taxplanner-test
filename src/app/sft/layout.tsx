import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Statement of Financial Transaction",
  description: "",
};

export default function SFTLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="SFT – Statement of Financial Transaction" />
      {children}
    </>
  );
}

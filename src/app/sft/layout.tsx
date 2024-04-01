import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

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

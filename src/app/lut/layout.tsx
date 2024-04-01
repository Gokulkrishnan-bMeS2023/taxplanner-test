import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Tax Planner - GST LUT",
  description: "",
};

export default function LutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="GST LUT" />
      {children}
    </>
  );
}

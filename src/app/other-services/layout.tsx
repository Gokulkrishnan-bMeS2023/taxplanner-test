import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Tax Planner - Other Services",
  description: "",
};

export default function OtherServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Other Services" />
      {children}
    </>
  );
}

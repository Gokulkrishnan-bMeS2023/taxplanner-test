import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - TDS Return on Sale of Property (Form 26QB)",
  description: "",
};

export default function TDSReturnonSaleofPropertyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="TDS Return on Sale of Property (Form 26QB)" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

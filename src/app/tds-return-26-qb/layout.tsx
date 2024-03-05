import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

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

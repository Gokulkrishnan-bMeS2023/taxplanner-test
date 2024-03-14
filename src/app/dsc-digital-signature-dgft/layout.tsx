import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for DGFT",
  description: "",
};

export default function DSCDigitalSignatureDGFTLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Digital Signature" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

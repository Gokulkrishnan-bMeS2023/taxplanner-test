import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for Foreign citizens and NRI",
  description: "",
};

export default function DSCDigitalSignatureNRILayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Digital Signature for Foreign citizens and NRI - Class 3" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

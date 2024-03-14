import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for Encrypted Individual",
  description: "",
};

export default function DSCDigitalSignatureEncryptedIndividualLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Digital Signature for Encripted Individual" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

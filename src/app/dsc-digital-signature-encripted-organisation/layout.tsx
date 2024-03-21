import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for Encripted Organisation",
  description: "",
};

export default function DSCDigitalSignatureEncryptedOrganisationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Digital Signature for Encripted Organisation" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

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

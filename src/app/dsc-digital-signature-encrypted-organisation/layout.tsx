import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for Encrypted Organisation",
  description: "",
};

export default function DSCDigitalSignatureEncryptedOrganisationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for Encripted Individual",
  description: "",
};

export default function DSCDigitalSignatureEncryptedIndividualLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

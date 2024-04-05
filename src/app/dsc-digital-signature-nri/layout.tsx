import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for Foreign citizens and NRI",
  description: "",
};

export default function DSCDigitalSignatureNRILayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

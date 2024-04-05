import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature ICEGATE",
  description: "",
};

export default function DSCDigitalSignatureLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}

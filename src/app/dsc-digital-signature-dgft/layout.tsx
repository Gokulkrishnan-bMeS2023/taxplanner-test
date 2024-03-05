import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature for DGFT",
  description: "",
};

export default function DSCDigitalSignatureDGFTLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}

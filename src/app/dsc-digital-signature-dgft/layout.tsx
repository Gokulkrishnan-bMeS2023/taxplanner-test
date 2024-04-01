import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

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

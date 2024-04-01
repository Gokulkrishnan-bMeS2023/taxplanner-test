import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

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

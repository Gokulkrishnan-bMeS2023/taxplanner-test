import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - Digital Signature ICEGATE",
  description: "",
};

export default function DSCDigitalSignatureLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Digital Signature ICEGATE" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

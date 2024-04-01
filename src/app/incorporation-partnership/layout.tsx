import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - Incorporation Partnership",
  description: "",
};

export default function IncorporationPartnershipLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Incorporation Partnership" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

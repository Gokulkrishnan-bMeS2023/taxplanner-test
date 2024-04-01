import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - GST Filing - GSTR - 1 (3 months)",
  description: "",
};

export default function GSTFiling123MonthlyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="GST Filing - GSTR - 1 (3 months)" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

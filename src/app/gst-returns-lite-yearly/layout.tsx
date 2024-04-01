import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - GST Returns (Lite - 1 Year)",
  description: "",
};

export default function GSTReturnsLiteYearlyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="GST Returns (Lite - 1 Year)" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

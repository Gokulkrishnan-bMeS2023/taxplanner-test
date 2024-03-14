import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

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

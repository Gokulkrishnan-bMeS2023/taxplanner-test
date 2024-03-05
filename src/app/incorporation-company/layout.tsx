import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Incorporation Company",
  description: "",
};

export default function IncorporationCompanyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Incorporation Company" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

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

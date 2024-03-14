import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - DSC Services",
  description: "",
};

export default function DSCServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="DSC Services" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

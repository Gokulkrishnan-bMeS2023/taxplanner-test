import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS Return",
  description: "",
};

export default function TDSReturnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="TDS Return" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

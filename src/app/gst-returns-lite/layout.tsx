import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GST Returns (Lite)",
  description: "",
};

export default function GSTReturnsLiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="GST Returns (Lite)" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

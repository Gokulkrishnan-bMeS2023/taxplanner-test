import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS Returns - Payments outside India (Form 27Q)",
  description: "",
};

export default function TDSReturnsPaymentsoutsideIndiaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="TDS Returns - Payments outside India (Form 27Q)" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

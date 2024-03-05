import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS Return on Sale of Property",
  description: "",
};

export default function TDSReturnonSalaryPaymentLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="TDS Return on Salary Payment" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

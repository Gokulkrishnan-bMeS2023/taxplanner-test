import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

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

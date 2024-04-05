import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS Return on Sale of Property",
  description: "",
};

export default function TDSReturnonSalaryPaymentLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

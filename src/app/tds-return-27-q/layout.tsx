import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS Returns - Payments outside India (Form 27Q)",
  description: "",
};

export default function TDSReturnsPaymentsoutsideIndiaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

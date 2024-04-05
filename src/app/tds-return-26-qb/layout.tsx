import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS Return on Sale of Property (Form 26QB)",
  description: "",
};

export default function TDSReturnonSaleofPropertyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Tax Planner - GSTRefund",
  description: "",
};

export default function GSTRefundLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="GST Refund" />
      {children}
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GSTRefund",
  description: "",
};

export default function GSTRefundLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}
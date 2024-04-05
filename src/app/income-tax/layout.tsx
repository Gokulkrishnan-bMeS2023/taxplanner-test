import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Income Tax",
  description: "",
};

export default function IncomeTaxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

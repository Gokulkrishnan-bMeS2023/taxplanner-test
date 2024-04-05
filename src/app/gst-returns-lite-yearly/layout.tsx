import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GST Returns (Lite - 1 Year)",
  description: "",
};

export default function GSTReturnsLiteYearlyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

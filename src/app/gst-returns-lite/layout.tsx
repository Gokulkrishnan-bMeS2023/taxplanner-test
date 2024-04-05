import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GST Returns (Lite)",
  description: "",
};

export default function GSTReturnsLiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS Return",
  description: "",
};

export default function TDSReturnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

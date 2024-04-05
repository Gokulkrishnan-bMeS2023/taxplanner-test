import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Incorporation Company",
  description: "",
};

export default function IncorporationCompanyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

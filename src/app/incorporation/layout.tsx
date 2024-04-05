import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Incorporation",
  description: "",
};

export default function IncorporationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

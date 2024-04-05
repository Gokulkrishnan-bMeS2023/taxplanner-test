import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Limited Liability Partnership (LLP) Registration",
  description: "",
};

export default function IncorporationLLPLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

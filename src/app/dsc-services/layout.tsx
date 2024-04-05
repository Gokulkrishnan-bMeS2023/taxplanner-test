import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - DSC Services",
  description: "",
};

export default function DSCServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GST Return Services",
  description: "",
};

export default function GSTReturnServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

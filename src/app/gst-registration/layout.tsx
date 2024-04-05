import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Goods And Services Tax (GST) Registration",
  description: "",
};

export default function GSTRegistrationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

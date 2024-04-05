import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GST",
  description: "",
};

export default function GSTLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

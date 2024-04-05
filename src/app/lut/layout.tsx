import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GST LUT",
  description: "",
};

export default function LutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

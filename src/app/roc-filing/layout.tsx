import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - ROC filing",
  description: "",
};

export default function ROCFilingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - TDS/TCS",
  description: "",
};

export default function TDSTCS({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

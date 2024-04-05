import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Other Services",
  description: "",
};

export default function OtherServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

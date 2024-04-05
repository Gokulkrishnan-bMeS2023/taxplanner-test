import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - MSME Registration",
  description: "",
};

export default function MEMSRegistrationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

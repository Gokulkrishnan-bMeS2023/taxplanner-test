import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - IEC Registration Renewal",
  description: "",
};

export default function IECRegistrationRenewalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

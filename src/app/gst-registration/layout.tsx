import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Tax Planner - Goods And Services Tax (GST) Registration",
  description: "",
};

export default function GSTRegistrationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Goods And Services Tax (GST) Registration" />
      {children}
    </>
  );
}

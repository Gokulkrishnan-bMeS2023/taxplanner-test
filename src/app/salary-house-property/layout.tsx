import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Tax Planner - Salary&HouseProperty",
  description: "",
};

export default function SalaryHousePropertyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Salary & House Property" />
      {children}
    </>
  );
}

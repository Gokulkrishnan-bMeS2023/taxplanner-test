import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Salary&HouseProperty",
  description: "",
};

export default function SalaryHousePropertyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
     <Header heading="Salary & House Property" />
      {children}
    </>
  );
}
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - NRI",
  description: "",
};

export default function NRILayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
       <Header heading="NRI" />
      {children}
    </>
  );
}
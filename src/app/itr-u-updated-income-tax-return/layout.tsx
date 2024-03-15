import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - ITRUIncomeTaxReturn",
  description: "",
};

export default function ITRUIncomeTaxReturnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
       <Header heading="ITR U" />
      {children}
    </>
  );
}
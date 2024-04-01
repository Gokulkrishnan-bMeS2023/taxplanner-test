import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

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
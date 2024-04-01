import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Tax Planner - ITRUIncomeTaxReturn",
  description: "",
};

export default function ITRUIncomeTaxReturnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="ITR U" />
      {children}
    </>
  );
}

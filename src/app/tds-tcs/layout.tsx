import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - TDS/TCS",
  description: "",
};

export default function TDSTCS({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading=" TDS/TCS" />
      {children}
      <BGWithQueriesForm heading="All Services" buttonName="Request A Callback"/>
    </>
  );
}

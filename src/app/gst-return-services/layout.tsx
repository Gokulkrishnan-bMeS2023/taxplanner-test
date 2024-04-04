import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - GST Return Services",
  description: "",
};

export default function GSTReturnServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="GST Services" />
      {children}
      <BGWithQueriesForm heading="All Services" buttonName="Request A Callback"/>
    </>
  );
}

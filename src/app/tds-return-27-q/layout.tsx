import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - TDS Returns - Payments outside India (Form 27Q)",
  description: "",
};

export default function TDSReturnsPaymentsoutsideIndiaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="TDS Returns - Payments outside India (Form 27Q)" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

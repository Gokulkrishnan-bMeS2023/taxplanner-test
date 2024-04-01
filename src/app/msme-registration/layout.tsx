import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - MSME Registration",
  description: "",
};

export default function MEMSRegistrationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="MSME Registration" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

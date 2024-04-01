import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - IEC Registration Renewal",
  description: "",
};

export default function IECRegistrationRenewalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading={"IEC Registration Renewal"} />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

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

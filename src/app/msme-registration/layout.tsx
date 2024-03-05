import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import type { Metadata } from "next";

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
      <BGWithQueriesForm/>
    </>
  );
}

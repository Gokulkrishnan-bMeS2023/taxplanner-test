import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - GSTRegistration",
  description: "",
};

export default function GSTRegistrationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
       <Header heading="GST Registration" />
      {children}
    </>
  );
}
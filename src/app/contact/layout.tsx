import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Contact",
  description: "",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
    <Header heading="Contact"/>
      {children}
    </>
  );
}
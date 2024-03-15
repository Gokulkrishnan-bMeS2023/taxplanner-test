import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Business or Profession",
  description: "",
};

export default function BusinessorProfessionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
       <Header heading="Business or Profession" />
      {children}
    </>
  );
}
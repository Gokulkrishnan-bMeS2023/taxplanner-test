import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Amendments",
  description: "",
};

export default function AmendmentsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}
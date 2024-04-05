import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Capital Gain",
  description: "",
};

export default function CapitalGainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}

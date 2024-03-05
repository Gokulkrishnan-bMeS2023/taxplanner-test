import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Planner - Lut",
  description: "",
};

export default function LutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  );
}
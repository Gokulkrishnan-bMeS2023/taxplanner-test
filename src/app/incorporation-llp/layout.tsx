import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const BGWithQueriesForm = dynamic(
  () => import("@/components/BGWithQueriesForm")
);

export const metadata: Metadata = {
  title: "Tax Planner - Limited Liability Partnership (LLP) Registration",
  description: "",
};

export default function IncorporationLLPLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header heading="Limited Liability Partnership" />
      {children}
      <BGWithQueriesForm />
    </>
  );
}

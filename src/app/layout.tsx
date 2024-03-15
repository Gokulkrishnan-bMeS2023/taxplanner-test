import { Providers } from "./providers";
import type { Metadata } from "next";
// import ErrorBoundary from "./ErrorBoundary";
import dynamic from "next/dynamic";
import "./globals.css";

export const metadata: Metadata = {
  title: "taxplanner",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Footer = dynamic(() => import("@/components/Footer"));
  const ScrollToTopButton = dynamic(
    () => import("@/components/BackToTopButton")
  );

  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <ErrorBoundary> */}
            <main>{children}</main>
          {/* </ErrorBoundary> */}
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import dynamic from "next/dynamic";
import UserContextProvider from "../utils/context/index";
const Footer = dynamic(() => import("@/components/Footer"));
const ScrollToTopButton = dynamic(() => import("@/components/BackToTopButton"));
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <Providers>
            <main>{children}</main>
            <Footer />
            <ScrollToTopButton />
          </Providers>
        </UserContextProvider>
      </body>
    </html>
  );
}

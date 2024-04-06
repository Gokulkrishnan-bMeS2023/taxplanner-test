import { Providers } from "./providers";
import UserContextProvider from "../utils/context/index";
import { Open_Sans, Jost } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const BackToTopButton = dynamic(() => import("@/components/BackToTopButton"));
const Footer = dynamic(() => import("@/components/Footer"));

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${jost.variable}`}>
      <body>
        <UserContextProvider>
          <Providers>
            <main>{children}</main>
            <Footer />
            <BackToTopButton />
          </Providers>
        </UserContextProvider>
      </body>
    </html>
  );
}

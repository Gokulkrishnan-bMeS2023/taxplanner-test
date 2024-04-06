import { Providers } from "./providers";
import UserContextProvider from "../utils/context/index";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import { Open_Sans, Jost } from "next/font/google";
import "./globals.css";

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

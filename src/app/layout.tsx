import { Providers } from "./providers";
import UserContextProvider from "../utils/context/index";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
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
            <BackToTopButton />
          </Providers>
        </UserContextProvider>
      </body>
    </html>
  );
}

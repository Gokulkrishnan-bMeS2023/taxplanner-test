import { Providers } from "./providers";
import dynamic from "next/dynamic";
import UserContextProvider from "../utils/context/index";
import "./globals.css";
import { useUserContext } from "@/utils/hooks";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Footer = dynamic(() => import("@/components/Footer"));
  const ScrollToTopButton = dynamic(
    () => import("@/components/BackToTopButton")
  );

  const { data } = useUserContext();

  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          {data ? (
            <>
              <Providers>
                <main>{children}</main>
                <Footer />
                <ScrollToTopButton />
              </Providers>
            </>
          ) : (
            Loading
          )}
        </UserContextProvider>
      </body>
    </html>
  );
}

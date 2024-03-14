"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
  },
  components: {
    Container: {
      baseStyle: {
        maxW: { base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" },
        px: 6,
      },
    },
  },
  styles: {
    global: {
      body: {
        color: "#555",
      },
      ":is(h1, h2, h3, h4, h5, h6)": {
        color: "#011A41",
      },
    },
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
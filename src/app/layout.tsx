import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";

import "~/assets/css/index.scss";
import "@mantine/core/styles.layer.css";
import "@mantine/carousel/styles.layer.css";

import Header from "~/components/global/Header/Header";
import Footer from "~/components/global/Footer/Footer";
import { breakpoints } from "~/utils/breakpoints";
import StoreProvider from "./StoreProvider";

const outfitSans = Outfit({
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-outift",
  subsets: ["latin"],
});

const theme = createTheme({
  fontFamily: outfitSans.style.fontFamily,
  focusRing: "auto",
  scale: 1,
  fontSmoothing: true,
  white: "#FFFFFF",
  black: "#000000",
  /* colors: {
    gray: ["#e0e0e0", "#898989", "#666666", "#3d3d3d", "#2a2a2a", "#101010"],
    red: ["#e94646"],
    blue: ["#2b48a7"],
    green: ["#26733a"],
  }, */
  primaryShade: {
    dark: 8,
    light: 6,
  },
  primaryColor: "gray",

  headings: {
    fontFamily: outfitSans.style.fontFamily,
    fontWeight: "400",
    textWrap: "balance",

    sizes: {
      h1: {
        fontSize: "67.32px",
        fontWeight: "400",
        lineHeight: "1",
      },
      h2: {
        fontSize: "50.5px",
        fontWeight: "400",
        lineHeight: "1",
      },
      h3: {
        fontSize: "37.9px",
        fontWeight: "400",
        lineHeight: "1",
      },
      h4: {
        fontSize: "28.4px",
        fontWeight: "400",
        lineHeight: "1",
      },
      h5: {
        fontSize: "21.32px",
        fontWeight: "400",
        lineHeight: "1",
      },
      h6: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1",
      },
    },
  },

  radius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },

  defaultRadius: "md",

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  fontSizes: {
    h1: "67.32px",
    h2: "50.5px",
    h3: "37.9px",
    h4: "28.4px",
    h5: "21.32px",
    h6: "16px",
    p: "12px",
    caption: "9px",
  },

  shadows: {
    md: "0px 3px 8px rgba(0, 0, 0, .24)",
  },

  respectReducedMotion: false,
  cursorType: "pointer",
  activeClassName: "active",

  breakpoints: { ...breakpoints },
});

export const metadata: Metadata = {
  title: "Kassandra",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${outfitSans.className} antialiased`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <StoreProvider>
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

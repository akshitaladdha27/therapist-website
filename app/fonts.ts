import localFont from "next/font/local";

export const lilacFont = localFont({
  src: [
    { path: "../public/fonts/Lilac-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Lilac-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Lilac-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Lilac-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Lilac-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Lilac-ExtraBold.woff2", weight: "800", style: "normal" },

    { path: "../public/fonts/Lilac-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/Lilac-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Lilac-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/Lilac-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-lilac",
  display: "swap",
});

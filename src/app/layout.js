import "./globals.css";
import QCVisionThemeProvider from "./theme-provider";

export const metadata = {
  title: "QCVision | AI Quality Control",
  description:
    "QCVision delivers AI-powered inspection and analytics for modern manufacturing.",
  metadataBase: new URL("https://qcvision.me"),
  openGraph: {
    title: "QCVision | AI Quality Control",
    description:
      "QCVision delivers AI-powered inspection and analytics for modern manufacturing.",
    url: "https://qcvision.me",
    siteName: "QCVision",
    images: [
      {
        url: "/logo.png",
        alt: "QCVision Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QCVision | AI Quality Control",
    description:
      "QCVision delivers AI-powered inspection and analytics for modern manufacturing.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QCVisionThemeProvider>{children}</QCVisionThemeProvider>
      </body>
    </html>
  );
}

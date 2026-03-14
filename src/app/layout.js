import "./globals.css";
import QCVisionThemeProvider from "./theme-provider";

const title = "QCVision | AI-Powered Perishables Quality Control";
const description =
  "QCVision delivers AI-powered inspection and analytics for perishables quality control.";

export const metadata = {
  title,
  description,
  metadataBase: new URL("https://qcvision.me"),
  openGraph: {
    title,
    description,
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
    title,
    description,
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

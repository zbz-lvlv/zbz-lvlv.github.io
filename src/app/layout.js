import "./globals.css";
import QCVisionThemeProvider from "./theme-provider";

export const metadata = {
  title: "QCVision | AI Quality Control",
  description:
    "QCVision delivers AI-powered inspection and analytics for modern manufacturing.",
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

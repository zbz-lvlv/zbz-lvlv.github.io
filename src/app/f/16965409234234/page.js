import DownloadTrigger from "./download-trigger";

const title = "QCVision Report";
const description =
  "QCVision delivers AI-powered inspection and analytics for modern manufacturing.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://qcvision.me/f/16965409234234",
    siteName: "QCVision",
    images: [
      {
        url: "/Screenshot 2026-03-14 at 23.40.41.png",
        alt: "QCVision Report Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Screenshot 2026-03-14 at 23.40.41.png"],
  },
};

export default function DownloadPage() {
  return <DownloadTrigger />;
}

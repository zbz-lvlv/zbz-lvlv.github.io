import DownloadTrigger from "./download-trigger";

const title = "QCVision Batch Quality Assessment";
const description =
  "QCVision delivers AI-powered inspection and analytics for perishables quality control.";

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
        alt: "QCVision Batch Quality Assessment Preview",
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

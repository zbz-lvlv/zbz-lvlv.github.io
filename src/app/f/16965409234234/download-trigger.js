"use client";

import { useEffect } from "react";

export default function DownloadTrigger() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/QCVision_Report_2026-03-14 (4).pdf";
    link.download = "QCVision_Report_2026-03-14 (4).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <p>
        Your download should start automatically. If it doesn&apos;t,{" "}
        <a href="/QCVision_Report_2026-03-14 (4).pdf" download>
          click here
        </a>
        .
      </p>
    </div>
  );
}

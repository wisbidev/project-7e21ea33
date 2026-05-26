import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aiteam — AI Team, Không cần thuê dev",
  description:
    "Mô tả ý tưởng trên Telegram. AI team tự phân tích, build và deploy sản phẩm của bạn.",
  openGraph: {
    title: "aiteam — AI Team, Không cần thuê dev",
    description:
      "Mô tả ý tưởng trên Telegram. AI team tự phân tích, build và deploy sản phẩm của bạn.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark">
      <body className="bg-background text-headline antialiased">
        {children}
      </body>
    </html>
  );
}

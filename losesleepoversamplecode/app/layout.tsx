import TopHeader from "./component/TopHeader";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="m-0 bg-[#f5f5f5] text-black">
        <TopHeader />
        {children}
      </body>
    </html>
  );
}
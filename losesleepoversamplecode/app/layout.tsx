import MainHeader from "./component/MainHeader";
import TopHeader from "./component/TopHeader";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
        <TopHeader />
        <MainHeader />
        
      <body>{children}</body>
    </html>
  );
}
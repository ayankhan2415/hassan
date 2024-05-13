import "../assets/css/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/views/Header";
import Footer from "@/views/Footer";

export const metadata = {
  title: "Hassan Muawiya",
  description: "Full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-[80] min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

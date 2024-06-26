import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LayoutProvider from "./layoutProvider";
import NavBar from "@/components/navBar";
import { ThemeProvider } from "@/components/theme-provider";
import { cookies } from "next/headers";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TC Phim | Phim mới | Trực tuyến | Phim hay | Phim chiếu rạp",
  description: "TC Phim - Đem đến cho mọi người những bộ phim mới và phổ biến ",
  openGraph: {
    title: "TC Phim | Phim mới | Trực tuyến | Phim hay | Phim chiếu rạp",
    description:
      "TC Phim - Đem đến cho mọi người những bộ phim mới và phổ biến ",
    images: [
      {
        url: "/logoFull.png",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = cookies();
  const action = cookie.get("token")?.value !== undefined ? true : false;
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutProvider>
            <section className="w-full  max-w-[1920px] m-auto">
              {children}
            </section>
            <Footer />
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

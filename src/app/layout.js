import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWrapper from '@/components/ThemeWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neel Malwatkar",
  description: "Neel Malwatkar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWrapper mode ="light">
            {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}

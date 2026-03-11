import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx (root layout) — recommended place for default metadata
export const metadata = {
  title: {
    default: "Bharatx Ventures Private Limited",
    template: "%s | Bharatx Ventures", // for child pages: "About | Bharatx Ventures"
  },
  description:
    "Premier venture development firm institutionalizing India's SME sector through strategic capital, venture building, and industrial excellence.",
  keywords: [
    "venture building",
    "SME growth India",
    "venture capital India",
    "agri-tech manufacturing",
    "industrial automation AI",
    "Bharatx Ventures",
    "startup scaling India",
    "strategic consulting Bihar",
  ],
  authors: [{ name: "Naveen Kumar", url: "https://bharatxventures.com" }],
  creator: "Bharatx Ventures Private Limited",
  publisher: "Bharatx Ventures Private Limited",
  category: "Business & Finance",

  // Open Graph / Social sharing
  openGraph: {
    title: "Bharatx Ventures – Building Scalable Enterprises for India's Future",
    description:
      "We partner with entrepreneurs and institutions to create, fund, and scale high-impact ventures across key industrial sectors.",
    url: "https://bharatxventures.com",
    siteName: "Bharatx Ventures",
    images: [
      {
        url: "/og-image.jpg",           // ← place a 1200×630 image in /public
        width: 1200,
        height: 630,
        alt: "Bharatx Ventures – Institutional Venture Building in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Bharatx Ventures Private Limited",
    description:
      "Scaling India's industrial backbone through venture building, capital, and strategic excellence.",
    images: ["/twitter-card.jpg"],     // 1200×600 recommended
    creator: "@bharatxventures",       // ← if you have an X handle
  },

  // Basic robots & verification
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Optional: verification tags (add when you get them)
  // verification: {
  //   google: "your-google-site-verification-code",
  //   other: {
  //     "msvalidate.01": "your-bing-verification-code",
  //   },
  // },

  // Manifest / PWA (if you're building one)
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <GoToTop/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

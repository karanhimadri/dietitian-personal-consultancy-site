import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Dr. Priya Sharma - Clinical Dietitian | Apollo Gleneagles Experience",
    template: "%s | Dr. Priya Sharma - Clinical Dietitian"
  },
  description: "Certified Clinical Dietitian with 7+ years experience at Apollo Gleneagles Hospital, Kolkata. Personalized nutrition coaching, diet plans, and health consultations for diabetes, PCOS, weight management & more.",
  keywords: ["clinical dietitian", "nutrition consultant", "Apollo Gleneagles", "diet plans", "nutrition coaching", "diabetes diet", "PCOS diet", "weight loss", "Kolkata dietitian"],
  authors: [{ name: "Dr. Priya Sharma" }],
  creator: "Dr. Priya Sharma",
  publisher: "Dr. Priya Sharma Nutrition Consultancy",
  metadataBase: new URL('https://drpriyasharma-nutrition.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drpriyasharma-nutrition.com',
    title: 'Dr. Priya Sharma - Clinical Dietitian | Apollo Gleneagles Experience',
    description: 'Certified Clinical Dietitian with 7+ years experience at Apollo Gleneagles Hospital. Get personalized nutrition coaching and diet plans.',
    siteName: 'Dr. Priya Sharma Nutrition',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Priya Sharma - Clinical Dietitian',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Priya Sharma - Clinical Dietitian | Apollo Gleneagles Experience',
    description: 'Certified Clinical Dietitian with 7+ years experience at Apollo Gleneagles Hospital. Get personalized nutrition coaching.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

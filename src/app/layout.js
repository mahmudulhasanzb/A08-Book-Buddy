import './globals.css';
import { Geist, Fraunces } from 'next/font/google';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/Footer';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Book Budy – Borrow books, anytime, anywhere',
  description:
    'A modern online book borrowing platform. Explore stories, science and tech titles curated by readers like you.',
};

export const viewport = {
  themeColor: '#f5efe6',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

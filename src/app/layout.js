import './globals.css';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'Book Buddy - Discover & Read Books',
  description: 'Book Buddy is your companion for exploring, finding, and learning about your favorite books.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

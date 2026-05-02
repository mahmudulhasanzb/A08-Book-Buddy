import './globals.css';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
  title: 'Book Buddy - Online Library',
  description: 'A seamless and modern web application to explore and borrow books digitally.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

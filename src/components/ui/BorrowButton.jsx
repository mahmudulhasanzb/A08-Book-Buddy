'use client';
import Link from 'next/link';
import { toast } from 'react-toastify';

const BorrowButton = ({ isLoggedIn, available }) => {
  if (!isLoggedIn) {
    return (
      <Link
        href="/login"
        className="btn btn-primary btn-lg rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 text-lg w-full sm:w-auto px-10"
      >
        Login to Borrow
      </Link>
    );
  }

  if (!available) {
    return (
      <button
        disabled
        className="btn btn-lg rounded-xl text-lg w-full sm:w-auto px-10 opacity-50 cursor-not-allowed"
      >
        OUT OF STOCK
      </button>
    );
  }

  return (
    <button
      onClick={() => toast.success('Book borrowed successfully! Enjoy your read 📚')}
      className="btn btn-primary btn-lg rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 text-lg w-full sm:w-auto px-10"
    >
      BORROW THIS BOOK
    </button>
  );
};

export default BorrowButton;

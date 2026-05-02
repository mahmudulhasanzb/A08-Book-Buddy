'use client';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const SignOut = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/');
    router.refresh();
    toast.warn("You SignOut")
  };
  return (
    <button
      onClick={handleSignOut}
      className="btn btn-warning btn-sm sm:btn-md rounded-xl px-4 sm:px-6 shadow-md hover:shadow-warning/40 hover:-translate-y-0.5 transition-all duration-300 font-semibold border-none"
    >
      Sign Out
    </button>
  );
};

export default SignOut;

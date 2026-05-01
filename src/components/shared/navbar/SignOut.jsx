'use client';
import { authClient } from ' @/lib/auth-client';
import React from 'react';

const SignOut = () => {
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    < button
      onClick={handleSignOut}
      className="btn btn-warning btn-sm sm:btn-md rounded-xl px-4 sm:px-6 shadow-md hover:shadow-warning/40 hover:-translate-y-0.5 transition-all duration-300 font-semibold border-none"
    >
      Sign Out
    </button>
  );
};

export default SignOut;

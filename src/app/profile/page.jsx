'use client';
import UpdateProfile from '@/components/updateprofile/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const TestPage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full flex flex-col items-center justify-center p-6 bg-base-200 rounded-xl shadow-sm ">
        <img
          src={user?.image}
          alt={user?.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-sm"
        />
        <h2 className="text-xl text-center font-bold">{user?.name}</h2>
        <p className="text-center text-gray-500 mb-3">{user?.email}</p>
        <UpdateProfile/>
      </div>
    </div>
  );
};

export default TestPage;

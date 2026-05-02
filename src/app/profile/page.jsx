'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProfilePage = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  useEffect(() => {
    if (!userData.isPending && !userData.data) {
      router.push('/login');
    }
  }, [userData, router]);

  if (userData.isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="max-w-md w-full flex flex-col items-center justify-center p-8 bg-base-100 rounded-3xl shadow-2xl border border-base-200/50 backdrop-blur-xl">
        <div className="relative group mb-6">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-500"></div>
          <Image
            src={user?.image || 'https://via.placeholder.com/150'}
            alt={user?.name || 'User'}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto shadow-md object-cover relative z-10 border-4 border-base-100"
          />
        </div>
        
        <h2 className="text-3xl text-center font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent pb-1">
          {user?.name}
        </h2>
        <p className="text-center text-base-content/60 font-medium mb-6">{user?.email}</p>
        
        <Link href="/profile/update" className="w-full">
          <button className="btn btn-primary w-full text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;

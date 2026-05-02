'use client';
import { authClient } from '@/lib/auth-client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { FaArrowLeft, FaUser, FaImage } from 'react-icons/fa6';

const UpdateProfilePage = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (!userData.isPending && !userData.data) {
      router.push('/login');
    } else if (user) {
      setName(user.name || '');
      setImage(user.image || '');
    }
  }, [userData, router, user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Updating information...');
    try {
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      toast.dismiss(toastId);
      if (error) {
        toast.error(error.message || 'Failed to update profile.');
      } else {
        toast.success('Information updated successfully!');
        router.push('/profile');
        router.refresh();
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error(err.message || 'An error occurred while updating profile.');
    }
  };

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
    <div className="min-h-screen bg-base-200 py-12 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-md w-full relative z-10">
        <Link href="/profile" className="inline-flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors font-medium mb-6 bg-base-100/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
          <FaArrowLeft /> Back to Profile
        </Link>

        <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300/50 p-8 sm:p-10 backdrop-blur-xl bg-opacity-90">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
              Update Information
            </h1>
            <p className="text-base-content/60 font-medium">
              Refresh your name and avatar
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/40 group-focus-within:text-primary transition-colors">
                  <FaUser />
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="input input-bordered w-full pl-11 bg-base-200/50 focus:bg-base-100 transition-all focus:ring-2 focus:ring-primary/20"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Image URL
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/40 group-focus-within:text-primary transition-colors">
                  <FaImage />
                </div>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="url"
                  className="input input-bordered w-full pl-11 bg-base-200/50 focus:bg-base-100 transition-all focus:ring-2 focus:ring-primary/20"
                  placeholder="Image URL"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;

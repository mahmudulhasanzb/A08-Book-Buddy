'use client';
import React from 'react';
import Link from 'next/link';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGithub,
  FaImage,
} from 'react-icons/fa6';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SingUpPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.signUp.email(
      {
        name,
        email,
        password,
        image,
      },
      {
        onSuccess: () => {
          toast.success('Account created successfully');
          router.push('/');
        },
        onError: error => {
          toast.error(error.message);
        },
      },
    );

  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-md w-full relative z-10">
        <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300/50 p-8 sm:p-10 backdrop-blur-xl bg-opacity-90">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
              Create Account
            </h1>
            <p className="text-base-content/60 mt-2 font-medium">
              Join Book Buddy and start reading
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/40 group-focus-within:text-primary transition-colors">
                  <FaUser />
                </div>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full pl-11 bg-base-200/50 focus:bg-base-100 transition-all focus:ring-2 focus:ring-primary/20"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/40 group-focus-within:text-primary transition-colors">
                  <FaEnvelope />
                </div>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full pl-11 bg-base-200/50 focus:bg-base-100 transition-all focus:ring-2 focus:ring-primary/20"
                  placeholder="hello@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/40 group-focus-within:text-primary transition-colors">
                  <FaLock />
                </div>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full pl-11 bg-base-200/50 focus:bg-base-100 transition-all focus:ring-2 focus:ring-primary/20"
                  placeholder="••••••••"
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
                  name="image"
                  type="text"
                  className="input input-bordered w-full pl-11 bg-base-200/50 focus:bg-base-100 transition-all focus:ring-2 focus:ring-primary/20"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-base-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-base-100 text-base-content/50 font-medium">
                  Or signup with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 gap-2 w-full shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                <FaGoogle className="text-red-500 text-lg" />
                Google
              </button>
              <button className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 gap-2 w-full shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
                <FaGithub className="text-lg" />
                GitHub
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-base-content/60 font-medium text-sm">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-bold text-primary hover:text-primary-focus hover:underline transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUpPage;

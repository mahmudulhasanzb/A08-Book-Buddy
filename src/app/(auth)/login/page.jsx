'use client';
import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa6';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const toastId = toast.loading('Logging in...');
    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      toast.dismiss(toastId);
      if (error) {
        toast.error(error.message || 'Login failed.');
      } else {
        toast.success('Login Successful');
        router.push('/');
        router.refresh();
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error(err.message || 'An error occurred during login.');
    }
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
              Welcome Back
            </h1>
            <p className="text-base-content/60 mt-2 font-medium">
              Sign in to continue to Book Buddy
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
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
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-base-content/80 ml-1">
                  Password
                </label>
              </div>
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
            <div>
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Sign In
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
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <button
                className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 gap-2 w-full shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
              >
                <FaGoogle className="text-red-500 text-lg" />
                Google
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-base-content/60 font-medium text-sm">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="font-bold text-primary hover:text-primary-focus hover:underline transition-colors"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;



          <form method="dialog" className="space-y-4">
            <div className="form-control w-full">
              <label className="label font-medium text-sm text-base-content/80">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input w-full rounded-xl"
              />
            </div>

            <div className="form-control w-full">
              <label className="label font-medium text-sm text-base-content/80">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input w-full rounded-xl"
              />
            </div>

            <div className="form-control w-full">
              <label className="label font-medium text-sm text-base-content/80">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter image URL (e.g., https://...)"
                className="input w-full rounded-xl"
              />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                method="dialog"
                className="btn btn-outline border-base-content/20 hover:bg-base-content/10 hover:border-transparent flex-1 rounded-xl"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary flex-1 rounded-xl"
              >
                Save Changes
              </button>
            </div>
          </form>;
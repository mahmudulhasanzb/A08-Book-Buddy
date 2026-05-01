"use client"
import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa6';


const LoginPage = () => {


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

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/40 group-focus-within:text-primary transition-colors">
                  <FaEnvelope />
                </div>
                <input
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
          Don't have an account?{' '}
          <Link
            href="/register"
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

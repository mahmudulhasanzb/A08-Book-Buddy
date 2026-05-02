'use client';
import { authClient } from '@/lib/auth-client';
import React, { useRef } from 'react';

const UpdateProfile = () => {
  const modalRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    // extra - for closing modal
    modalRef.current?.close();

    // Update user
    await authClient.updateUser({
      name,
      image
    })
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => modalRef.current.showModal()}
        className="btn btn-ghost text-purple-500 rounded-xl px-6 shadow-md"
      >
        Update Profile
      </button>

      <dialog ref={modalRef} className="modal backdrop-blur-sm bg-black/40">
        <div className="modal-box max-w-md bg-base-100/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 animate-fade-in relative">
          {/* Header */}
          <div className="mb-6 text-center">
            <h3 className="font-extrabold text-2xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Update Profile
            </h3>
            <p className="text-sm text-base-content/70 mt-1">
              Keep your profile details fresh and up to date
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="form-control w-full">
              <label className="label font-medium text-sm text-base-content/80">
                <span className="label-text">Full Name</span>
              </label>
              <input
                required
                type="text"
                name = "name"
                placeholder="Enter your full name"
                className="input w-full rounded-xl"
              />
            </div>

            <div className="form-control w-full">
              <label className="label font-medium text-sm text-base-content/80">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                required
                name = "image"
                placeholder="Enter image URL (e.g., https://...)"
                className="input w-full rounded-xl"
              />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => modalRef.current?.close()}
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
          </form>
        </div>

        {/* outside - close */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default UpdateProfile;

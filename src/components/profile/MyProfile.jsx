'use client';
import { useState } from 'react';
import { FaUserPen } from 'react-icons/fa6';

import Image from 'next/image';

const MyProfile = ({ user }) => {
  const [profile, setProfile] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    // 🔥 call API (next step)
    await fetch('/api/profile', {
      method: 'PUT',
      body: JSON.stringify(profile),
    });

    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-base-200 rounded-xl shadow-sm">
        <Image
          src={profile?.image || ''}
          alt={profile?.name || 'Profile'}
          width={96}
          height={96}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />

        {isEditing && (
          <input
            name="image"
            value={profile.image}
            onChange={handleChange}
            className="input input-bordered w-full mb-2"
          />
        )}

        {isEditing ? (
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="input input-bordered w-full mb-2"
          />
        ) : (
          <h2 className="text-xl text-center font-bold">{profile.name}</h2>
        )}

        {isEditing ? (
          <input
            name="username"
            value={profile.username}
            onChange={handleChange}
            className="input input-bordered w-full mb-2"
          />
        ) : (
          <p className="text-center text-gray-500">{profile.username}</p>
        )}

        {isEditing ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        ) : (
          <p className="text-center mt-2">{profile.bio}</p>
        )}

        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="btn btn-primary w-full mt-4"
        >
          <FaUserPen />
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;

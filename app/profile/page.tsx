"use client";

import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/navigation";
import { useState, useRef, ChangeEvent } from "react";

export default function ProfilePage() {
  const router = useRouter();

  // Placeholder user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+27 82 123 4567",
    // Placeholder default image
    profilePic: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };

  const [preview, setPreview] = useState<string>(user.profilePic);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h2 className="text-xl font-semibold capitalize">My Profile</h2>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div
          className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <img
            src={preview}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-sm text-black underline"
        >
          Change Profile Picture
        </button>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-gray-500">Full Name</p>
          <p className="text-black">{user.name}</p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <p className="text-black">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-500">Phone</p>
          <p className="text-black">{user.phone}</p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => router.push("/profile/edit")}
          className="w-full border px-4 py-2 rounded-md"
        >
          Edit Profile
        </button>

        <button
          onClick={() => router.push("/assessments")}
          className="w-full border px-4 py-2 rounded-md"
        >
          View My Assessments
        </button>

        <button className="w-full border px-4 py-2 rounded-md text-red-600 border-red-600">
          Log Out
        </button>
      </div>

      <BottomNav />
    </main>
  );
}

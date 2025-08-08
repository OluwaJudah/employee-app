"use client";

import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

export default function EditProfilePage() {
  const router = useRouter();

  // Load user data from localStorage or fallback default
  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const initialUser = storedUser
    ? JSON.parse(storedUser)
    : {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "+27 82 123 4567",
        profilePic: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      };

  const [form, setForm] = useState({
    name: initialUser.name || "",
    email: initialUser.email || "",
    phone: initialUser.phone || "",
  });

  const [preview, setPreview] = useState<string>(initialUser.profilePic);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = () => {
    // Save updated user info locally (or send to backend)
    const updatedUser = { ...form, profilePic: preview };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated!");
    router.push("/profile");
  };

  return (
    <main className="p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h2 className="text-xl font-semibold capitalize">Edit Profile</h2>
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
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-2 rounded-md"
      >
        Save Changes
      </button>

      <BottomNav />
    </main>
  );
}

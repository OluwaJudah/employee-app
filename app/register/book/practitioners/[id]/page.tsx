"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";

const practitionerProfiles: any = {
  1: {
    name: "Dr. Sarah Moyo",
    specialty: "Clinical Psychologist",
    language: "English, Zulu",
    experience: "8 years",
    bio: "Dr. Sarah specializes in cognitive-behavioral therapy for adults and adolescents. She’s passionate about mental wellness in underserved communities.",
    availability: {
      "2025-08-14": ["10:00 AM", "11:30 AM", "2:00 PM"],
      "2025-08-15": ["9:00 AM", "12:00 PM"],
    },
  },
  2: {
    name: "Dr. Tumi Khumalo",
    specialty: "Therapist",
    language: "English, Sotho",
    experience: "5 years",
    bio: "Tumi offers a supportive and empathetic space for clients working through trauma, stress, and family issues.",
    availability: {
      "2025-08-16": ["8:30 AM", "10:30 AM", "3:00 PM"],
    },
  },
};

export default function PractitionerProfilePage() {
  const { id } = useParams();
  const router = useRouter();
  const profile = practitionerProfiles[id as string];
  const [selected, setSelected] = useState<{
    date: string;
    time: string;
  } | null>(null);

  if (!profile) {
    return (
      <main className="p-4">
        <p>Practitioner not found.</p>
      </main>
    );
  }

  const handleBook = () => {
    if (!selected) return;
    // Could store in local storage/context or use query params if needed
    router.push(
      `/register/book/confirm?name=${encodeURIComponent(profile.name)}&date=${
        selected.date
      }&time=${selected.time}`
    );
  };

  return (
    <main className="p-4 pb-28 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h2 className="text-xl font-semibold">Practitioner Profile</h2>
      </div>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">{profile.name}</h3>
        <p className="text-sm text-gray-500">{profile.specialty}</p>
        <p className="text-sm text-gray-400">
          Languages: {profile.language} | Experience: {profile.experience}
        </p>
        <p className="text-sm mt-2">{profile.bio}</p>
      </section>

      <section className="space-y-4">
        <h4 className="font-medium">Available Time Slots</h4>

        {Object.entries(profile.availability as Record<string, string[]>).map(
          ([date, slots]) => (
            <div key={date} className="space-y-2">
              <p className="text-sm font-bold text-gray">
                {new Date(date).toDateString()}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelected({ date, time: slot })}
                    className={`border px-4 py-2 rounded text-sm ${
                      selected?.date === date && selected?.time === slot
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </section>

      <div className="pt-4">
        <button
          disabled={!selected}
          onClick={handleBook}
          className={`w-full py-2 rounded-md text-center font-medium ${
            selected
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Book This Practitioner
        </button>
      </div>

      <BottomNav />
    </main>
  );
}

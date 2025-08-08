"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

const practitioners = [
  {
    id: 1,
    name: "Dr. Sarah Moyo",
    specialty: "Clinical Psychologist",
    language: "English, Zulu",
    experience: "8 years",
  },
  {
    id: 2,
    name: "Dr. Tumi Khumalo",
    specialty: "Therapist",
    language: "English, Sotho",
    experience: "5 years",
  },
  {
    id: 3,
    name: "Dr. Nandi Maseko",
    specialty: "Counsellor",
    language: "English, Xhosa",
    experience: "6 years",
  },
];

export default function PractitionerSelectionPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-4 pb-24 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Select a Practitioner</h1>
      </div>

      <div className="space-y-4">
        {practitioners.map((practitioner) => (
          <div
            key={practitioner.id}
            onClick={() => router.push(`/appointments/practitioners/${practitioner.id}`)}
            className="border rounded-lg p-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium">{practitioner.name}</p>
              <p className="text-sm text-gray">{practitioner.specialty}</p>
              <p className="text-xs text-gray-400">
                Languages: {practitioner.language} | Experience: {practitioner.experience}
              </p>
            </div>
            <ChevronRight className="text-gray-600" />
          </div>
        ))}
      </div>

      <BottomNav />
    </main>
  );
}

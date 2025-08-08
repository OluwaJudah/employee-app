"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Practitioner = {
  id: string;
  name: string;
  title: string;
  languages: string[];
  specialty: string;
};

const practitioners: Practitioner[] = [
  {
    id: "p1",
    name: "Dr. Thabo Mokoena",
    title: "Clinical Psychologist",
    languages: ["English", "Zulu"],
    specialty: "Anxiety and Trauma",
  },
  {
    id: "p2",
    name: "Ms. Lerato Dlamini",
    title: "Registered Counsellor",
    languages: ["English", "Xhosa"],
    specialty: "Depression and Stress Management",
  },
  {
    id: "p3",
    name: "Dr. Sipho Ndlovu",
    title: "Psychiatrist",
    languages: ["English", "Zulu", "Afrikaans"],
    specialty: "Medication Management and Therapy",
  },
];

export default function PractitionerSelectionPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!selectedId) {
      alert("Please select a practitioner to continue.");
      return;
    }

    const practitioner = practitioners.find((p) => p.id === selectedId);
    if (practitioner) {
      localStorage.setItem("practitioner", JSON.stringify(practitioner));
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen p-4 max-w-md mx-auto bg-white text-black">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Choose Your Practitioner
      </h1>

      <ul className="space-y-4">
        {practitioners.map((p) => {
          const selected = p.id === selectedId;
          return (
            <li
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`border rounded-md p-4 cursor-pointer transition
                ${
                  selected
                    ? "border-gray-800 bg-gray-800 text-white"
                    : "border-gray-300 hover:border-gray-800"
                }
              `}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{p.name}</h2>
                <input
                  type="radio"
                  name="practitioner"
                  checked={selected}
                  onChange={() => setSelectedId(p.id)}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-sm italic">{p.title}</p>
              <p className="text-sm mt-1">
                <span className="font-medium">Languages:</span>{" "}
                {p.languages.join(", ")}
              </p>
              <p className="text-sm mt-1">{p.specialty}</p>
            </li>
          );
        })}
      </ul>

      <button
        onClick={handleSubmit}
        className="w-full mt-8 bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
      >
        Confirm and Continue
      </button>
    </main>
  );
}

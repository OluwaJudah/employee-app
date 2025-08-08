"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

export default function BackButton({ url }: { url?: string }) {
  const router = useRouter();
  const backHandler = () => (url ? router.push(url) : router.back());

  return (
    <button onClick={backHandler} aria-label="Go back" className="p-1">
      <ArrowLeftIcon className="w-5 h-5" />
    </button>
  );
}

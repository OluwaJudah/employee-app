import Link from "next/link";
import { FileTextIcon, ExternalLinkIcon } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

export default function ResourcesPage() {
  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Resources</h1>
      </div>

      <p className="text-sm text-gray-600">
        Browse helpful documents and links.
      </p>

      <ul className="space-y-3">
        <li className="border p-4 rounded-md flex items-center gap-3">
          <FileTextIcon className="w-5 h-5" />
          <a
            href="/resources/mental-health-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Mental Health Guide (PDF)
          </a>
        </li>
        <li className="border p-4 rounded-md flex items-center gap-3">
          <ExternalLinkIcon className="w-5 h-5" />
          <Link
            href="https://www.who.int/health-topics/mental-health"
            target="_blank"
          >
            WHO Mental Health Page
          </Link>
        </li>
        <li className="border p-4 rounded-md flex items-center gap-3">
          <FileTextIcon className="w-5 h-5" />
          <a
            href="/resources/wellness-checklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Wellness Checklist (PDF)
          </a>
        </li>
      </ul>

      <BottomNav />
    </main>
  );
}

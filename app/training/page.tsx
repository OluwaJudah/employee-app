import Link from "next/link";
import {
  BookIcon,
  ChevronRight,
  BookOpen,
  Notebook,
  Video,
} from "lucide-react";
import ManagerBottomNav from "@/components/ManagerBottomNav";

export default function MenuPage() {
  return (
    <main className="p-4 space-y-4 pb-16">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-black z-10 p-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          <h1 className="text-xl font-bold">Training</h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pt-18 pb-20 space-y-3">
        <ul className="space-y-2">
          <li>
            <Link
              href="/webinars"
              className="flex items-center justify-between border p-4 rounded-md"
            >
              <span className="flex items-center gap-3">
                <Video className="w-5 h-5" />
                Upcoming Webinars
              </span>
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </Link>
          </li>
          <li>
            <Link
              href="/webinars"
              className="flex items-center justify-between border p-4 rounded-md"
            >
              <span className="flex items-center gap-3">
                <Notebook className="w-5 h-5" />
                Past Webinars & Notes
              </span>
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="flex items-center justify-between border p-4 rounded-md"
            >
              <span className="flex items-center gap-3">
                <BookIcon className="w-5 h-5" /> Resources
              </span>
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </Link>
          </li>
        </ul>
      </div>
      <ManagerBottomNav />
    </main>
  );
}

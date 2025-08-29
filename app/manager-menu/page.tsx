import Link from "next/link";
import {
  BookIcon,
  VideoIcon,
  HeartPulseIcon,
  UserIcon,
  ChevronRight,
  MenuIcon,
  UsersIcon,
} from "lucide-react";
import ManagerBottomNav from "@/components/ManagerBottomNav";

export default function MenuPage() {
  return (
    <main className="p-4 space-y-4 pb-16">
      <div className="flex items-center gap-2">
        <MenuIcon className="w-5 h-5" />
        <h1 className="text-xl font-bold">More</h1>
      </div>

      <ul className="space-y-2">
        <li>
          <Link
            href="/employees"
            className="flex items-center justify-between border p-4 rounded-md"
          >
            <span className="flex items-center gap-3">
              <UsersIcon className="w-5 h-5" /> Employees
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
              <BookIcon className="w-5 h-5" /> Reports
            </span>
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="flex items-center justify-between border p-4 rounded-md"
          >
            <span className="flex items-center gap-3">
              <UserIcon className="w-5 h-5" /> Profile
            </span>
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </Link>
        </li>
      </ul>
      <ManagerBottomNav />
    </main>
  );
}

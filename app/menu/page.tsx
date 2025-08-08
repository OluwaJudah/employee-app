import Link from "next/link";
import {
  BookIcon,
  VideoIcon,
  HeartPulseIcon,
  HelpCircleIcon,
  UserIcon,
  BellIcon,
  ChevronRight,
  MenuIcon,
  UsersIcon,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

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
              <UsersIcon className="w-5 h-5" /> Manage Employees
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
        <li>
          <Link
            href="/webinars"
            className="flex items-center justify-between border p-4 rounded-md"
          >
            <span className="flex items-center gap-3">
              <VideoIcon className="w-5 h-5" /> Webinars
            </span>
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link
            href="/assessments"
            className="flex items-center justify-between border p-4 rounded-md"
          >
            <span className="flex items-center gap-3">
              <HeartPulseIcon className="w-5 h-5" /> Assessments
            </span>
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="flex items-center justify-between border p-4 rounded-md"
          >
            <span className="flex items-center gap-3">
              <HelpCircleIcon className="w-5 h-5" /> Support
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
        <li>
          <Link
            href="/notifications"
            className="flex items-center justify-between border p-4 rounded-md"
          >
            <span className="flex items-center gap-3">
              <BellIcon className="w-5 h-5" /> Notifications
            </span>
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </Link>
        </li>
      </ul>

      <BottomNav />
    </main>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, MenuIcon, PlusCircle, Calendar } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Home", icon: HomeIcon },
  { href: "/appointments/book", label: "Book", icon: PlusCircle },
  { href: "/appointments", label: "Sessions", icon: Calendar },
  { href: "/menu", label: "More", icon: MenuIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 border-t bg-white flex justify-around items-center py-2 z-50">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center text-xs ${
            pathname === href ? "text-black font-semibold" : "text-gray-500"
          }`}
        >
          <Icon className="w-5 h-5 mb-1" />
          {label}
        </Link>
      ))}
    </nav>
  );
}

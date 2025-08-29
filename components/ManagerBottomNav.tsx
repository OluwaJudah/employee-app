"use client";
import { BarChart3, BookOpen, FileText, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/manager-dashboard", label: "Overview", icon: BarChart3 },
  { href: "/referrals", label: "Referrals", icon: FileText },
  { href: "/training", label: "Trainiig", icon: BookOpen },
  { href: "/manager-menu", label: "More", icon: MenuIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 border-t bg-white flex justify-around items-center py-2 z-50">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center text-xs py-2 ${
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

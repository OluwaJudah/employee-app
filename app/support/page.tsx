"use client";

import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import { MailIcon } from "lucide-react";
import { MessageSquareIcon } from "lucide-react";
import { PhoneIcon } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Support</h1>
      </div>

      <section className="space-y-6">
        {/* WhatsApp Support */}
        <div className="border border-black p-4 rounded-md space-y-2">
          <h2 className="font-medium text-black">WhatsApp Support</h2>
          <a
            href="https://wa.me/1234567890" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black text-white text-center py-2 rounded"
          >
            Chat on WhatsApp
          </a>{" "}
        </div>

        <ul className="space-y-3">
          <li className="border p-4 rounded-md flex items-center gap-3">
            <MailIcon className="w-5 h-5" />
            <a href="mailto:support@example.com" className="underline">
              support@example.com
            </a>
          </li>
          <li className="border p-4 rounded-md flex items-center gap-3">
            <PhoneIcon className="w-5 h-5" />
            <a
              href="tel:+1234567890" // Replace with real number
              className="block text-black underline"
            >
              +1 (234) 567-890
            </a>
          </li>
          {/* <li className="border p-4 rounded-md flex items-center gap-3">
            <MessageSquareIcon className="w-5 h-5" />
            <a href="/chat" className="underline">
              Live Chat
            </a>
          </li> */}
        </ul>

        {/* Callback Form */}
        <div className=" space-y-4">
          <h2 className="font-medium text-black">Request a Callback</h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-black p-2 rounded text-black"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-black p-2 rounded text-black"
            />
            <textarea
              placeholder="Message (optional)"
              className="w-full border border-black p-2 rounded text-black"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Optional Live Chat */}
        {/* <div className="border border-black p-4 rounded-md space-y-2">
          <h2 className="font-medium text-black">Live Chat</h2>
          <p className="text-sm text-gray-600">Coming soon!</p>
        </div> */}
      </section>

      <BottomNav />
    </main>
  );
}

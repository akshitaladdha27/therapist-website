"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("site-unlocked");
    if (isLoggedIn === "true") {
      router.replace("/home");
    }
  }, [router]);

  const handleSubmit = () => {
    if (password === "lilac") {
      localStorage.setItem("site-unlocked", "true");

      router.replace("/home");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8">
        <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center">
          <Lock className="text-gray-400" size={22} />
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="w-72 px-4 py-3 border border-gray-300 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}

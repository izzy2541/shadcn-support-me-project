"use client";

import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function MainMenu({ className }: { className?: string }) {
  const [userName, setUserName] = useState("Guest");

  // Load user name from localStorage on mount
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  // Compute initials (first letter of first and last name if available)
  const initials = userName
    ? userName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?";

  return (
    <nav className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}>
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>

      <div className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>

      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800 rounded-full">
            {initials}
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        {/* <LightDarkToggle className="ml-auto" /> */}
      </footer>
    </nav>
  );
}

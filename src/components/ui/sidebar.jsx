"use client"; // Make it a client component

import Link from "next/link";
import sidebarItems from "./SidebarItems"; // Import sidebar items

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-background border-r border-border p-4">
      <h1 className="text-xl font-bold mb-6">Fazal Communication</h1>
      <ul className="space-y-2">
        {sidebarItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

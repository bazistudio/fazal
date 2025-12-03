"use client"; // Make it a client component

import Link from "next/link";

export default function Sidebar() {
  const sidebarItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Sales", href: "/dashboard/sales" },
    { name: "Products", href: "/dashboard/products" },
    { name: "Customers", href: "/dashboard/customers" },
    { name: "Reports", href: "/dashboard/reports" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

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

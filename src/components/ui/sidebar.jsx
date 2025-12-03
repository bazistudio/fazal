import { Home, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <Home />, href: "/" },
    { name: "Users", icon: <Users />, href: "/users" },
    { name: "Settings", icon: <Settings />, href: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-background border-r border-border p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-foreground">Faza Dashboard</h2>
      <nav className="flex-1">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-md hover:bg-accent/20 text-foreground"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

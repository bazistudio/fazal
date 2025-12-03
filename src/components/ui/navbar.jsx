import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background">
      <div className="font-bold text-lg text-foreground">Dashboard</div>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-foreground" />
        <User className="w-5 h-5 text-foreground" />
      </div>
    </header>
  );
}

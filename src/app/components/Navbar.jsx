<<<<<<< HEAD
=======
"use client";


>>>>>>> 3ff65b2 (first commit)
import { Bell, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-[#780000]/20 bg-gradient-to-r from-[#003049] to-[#003049]/95 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,#780000/5,transparent_50%)] pointer-events-none" />
      
      {/* Left side: Dashboard title */}
      <div className="relative z-10">
        <h1 className="font-bold text-2xl tracking-tight">
          <span className="text-white">Dashboard</span>
          <span className="text-[#fdf0d5] ml-2 font-semibold">Overview</span>
        </h1>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#c1121f] to-[#780000] rounded-full mt-1" />
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 max-w-md mx-8 relative z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#780000]/20 via-[#c1121f]/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
          
          <div className="relative flex items-center bg-[#003049]/80 backdrop-blur-sm border border-[#780000]/30 rounded-xl overflow-hidden group-hover:border-[#c1121f]/50 transition-all duration-300">
            <Search className="w-4 h-4 text-white/60 ml-4" />
            <input
              type="text"
              placeholder="Search reports, analytics, or settings..."
              className="w-full px-4 py-3 bg-transparent text-white placeholder:text-white/50 focus:outline-none text-sm"
            />
            <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-xl pointer-events-none" />
          </div>
          
          {/* Search hint */}
          <div className="absolute -bottom-6 left-0 text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Press ⌘K to search
          </div>
        </div>
      </div>

      {/* Right side: Icons */}
      <div className="flex items-center gap-4 relative z-10">
        {/* Notification Bell */}
        <button className="group relative p-2.5 rounded-lg bg-gradient-to-br from-[#003049] to-[#003049]/80 border border-[#780000]/20 hover:border-[#c1121f]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#780000]/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#780000]/0 via-[#c1121f]/0 to-transparent rounded-lg group-hover:from-[#780000]/10 group-hover:via-[#c1121f]/5 transition-all duration-500" />
          
          <Bell className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300 relative z-10" />
          
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#c1121f] rounded-full ring-2 ring-[#003049]" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#c1121f] rounded-full animate-ping opacity-75" />
        </button>

        {/* User Profile */}
        <button className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#003049] to-[#003049]/80 border border-[#780000]/20 hover:border-[#0077b6]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b6]/10">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0077b6] to-[#003049] flex items-center justify-center ring-2 ring-[#780000]/30 group-hover:ring-[#0077b6]/50 transition-all duration-300">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#fdf0d5] rounded-full border-2 border-[#003049]" />
          </div>
          
          <div className="text-left">
            <p className="text-sm font-medium text-white group-hover:text-[#fdf0d5] transition-colors duration-300">
              Admin User
            </p>
            <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
              Administrator
            </p>
          </div>
          
          {/* Hover indicator */}
          <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0077b6] animate-pulse" />
          </div>
        </button>
      </div>

      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-24 h-16 bg-gradient-to-r from-[#780000]/10 to-transparent" />
      <div className="absolute top-0 right-0 w-24 h-16 bg-gradient-to-l from-[#0077b6]/10 to-transparent" />
    </header>
  );
}
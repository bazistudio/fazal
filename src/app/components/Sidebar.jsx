"use client";

import Link from "next/link";
import sidebarItems from "./SidebarItems";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-[#003049] to-[#003049]/90 border-r border-[#780000]/30 p-4 flex flex-col shadow-2xl relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#780000/10,transparent_50%)] pointer-events-none" />
      
      {/* Logo / Title */}
<div className="mb-10 pt-4 relative z-10">
  <h1 className="text-2xl font-bold tracking-tight mb-1">
    <span className="block bg-gradient-to-r from-[#fdf0d5] via-[#fdf0d5]/90 to-[#fdf0d5]/80 bg-clip-text text-transparent">
      Fazal
    </span>
    <span className="block text-[#0077b6] mt-1">
      Communication
    </span>
  </h1>
  <div className="w-16 h-1 bg-gradient-to-r from-[#c1121f] to-[#780000] rounded-full mt-2" />
</div>


      {/* Sidebar Links */}
      <ul className="space-y-2 flex-1 relative z-10">
        {sidebarItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-lg 
              text-white/90 hover:text-white transition-all duration-300
              hover:bg-gradient-to-r hover:from-[#780000]/40 hover:via-[#c1121f]/20 hover:to-transparent
              hover:shadow-lg hover:shadow-[#780000]/20
              hover:border-l-4 hover:border-[#c1121f]
              active:scale-[0.98] transform-gpu
              relative overflow-hidden`}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#780000]/0 via-[#c1121f]/0 to-transparent 
                group-hover:from-[#780000]/20 group-hover:via-[#c1121f]/10 group-hover:to-transparent 
                transition-all duration-500" />
              
              {/* Icon with subtle animation */}
              <div className="relative z-10">
                {item.icon && (
                  <item.icon 
                    size={20} 
                    className="group-hover:scale-110 group-hover:text-white transition-all duration-300 text-white/80"
                  />
                )}
              </div>
              
              {/* Name with underline effect */}
              <span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-300 text-white">
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white 
                  group-hover:w-full transition-all duration-500 rounded-full" />
              </span>
              
              {/* Hover indicator */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer Section */}
      <div className="pt-6 pb-2 relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#780000]/50 to-transparent mb-4" />
        <p className="text-xs text-center text-white/70 font-medium tracking-wide">
          © 2025 Fazal Communication
          <span className="block text-[10px] text-white/50 mt-1 font-normal">
            Connecting you to possibilities
          </span>
        </p>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#780000]/20 to-transparent rounded-bl-3xl" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#0077b6]/20 to-transparent rounded-tr-3xl" />
    </aside>
  );
}
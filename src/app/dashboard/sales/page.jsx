"use client";

import { Smartphone, BatteryFull, Plug, Layers, Wrench, Coins } from "lucide-react";

export default function SalesPage() {
  const cards = [
    { title: "LCD Sales", value: "0 PKR", icon: Smartphone },
    { title: "Battery Sales", value: "0 PKR", icon: BatteryFull },
    { title: "Charging Flex", value: "0 PKR", icon: Plug },
    { title: "Mobile Casing", value: "0 PKR", icon: Layers },
    { title: "Repair Cost", value: "0 PKR", icon: Wrench },
    { title: "Extra Income", value: "0 PKR", icon: Coins },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-[#003049] mb-6">Sales Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-[#003049]/90 to-[#003049] 
              border border-[#780000]/30 shadow-xl overflow-hidden group 
              hover:shadow-[#780000]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                bg-[radial-gradient(circle_at_60%_20%,#c1121f33,transparent_60%)]" />

              {/* Icon */}
              <div className="relative z-10 mb-4">
                <card.icon className="w-10 h-10 text-[#fdf0d5] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#fdf0d5] relative z-10">
                {card.title}
              </h2>

              {/* Value */}
              <p className="text-2xl mt-2 font-bold text-[#fdf0d5] relative z-10">
                {card.value}
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c1121f] to-[#780000]" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

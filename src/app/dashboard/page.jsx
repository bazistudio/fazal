"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
  defs,
} from "recharts";
import { User, DollarSign, Package } from "lucide-react";

// Cards data
const cards = [
  { title: "Users", value: 1245, icon: User, color: "from-[#003049] to-[#0077b6]" },
  { title: "Revenue", value: 34567, icon: DollarSign, color: "from-[#c1121f] to-[#780000]" },
  { title: "Orders", value: 874, icon: Package, color: "from-[#0077b6] to-[#003049]" },
];

// Chart data
const dailyData = [
  { hour: "00", progress: 20 },
  { hour: "04", progress: 35 },
  { hour: "08", progress: 50 },
  { hour: "12", progress: 80 },
  { hour: "16", progress: 65 },
  { hour: "20", progress: 90 },
  { hour: "24", progress: 70 },
];

const weeklyData = [
  { day: "Mon", progress: 50 },
  { day: "Tue", progress: 65 },
  { day: "Wed", progress: 70 },
  { day: "Thu", progress: 90 },
  { day: "Fri", progress: 80 },
  { day: "Sat", progress: 60 },
  { day: "Sun", progress: 75 },
];

const monthlyData = [
  { month: "Jan", progress: 40 },
  { month: "Feb", progress: 55 },
  { month: "Mar", progress: 60 },
  { month: "Apr", progress: 70 },
  { month: "May", progress: 85 },
  { month: "Jun", progress: 60 },
  { month: "Jul", progress: 75 },
  { month: "Aug", progress: 90 },
  { month: "Sep", progress: 80 },
  { month: "Oct", progress: 70 },
  { month: "Nov", progress: 65 },
  { month: "Dec", progress: 90 },
];

export default function DashboardHome() {
  const [selectedMonth, setSelectedMonth] = useState("Dec");
  const filteredMonthlyData = monthlyData.slice(
    0,
    monthlyData.findIndex((m) => m.month === selectedMonth) + 1
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-[#003049] mb-6">Dashboard Overview</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${card.color} 
              border border-[#780000]/30 shadow-xl overflow-hidden group 
              hover:shadow-[#780000]/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              <div className="flex items-center gap-4 mb-4">
                <card.icon className="w-8 h-8 text-[#fdf0d5]" />
                <h2 className="text-xl font-semibold text-[#fdf0d5]">{card.title}</h2>
              </div>
              <p className="text-2xl font-bold text-[#fdf0d5]">{card.value}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c1121f] to-[#780000]" />
            </div>
          ))}
        </div>

        {/* Charts */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Daily */}
  <div className="bg-gradient-to-br from-[#003049]/80 to-[#003049]/60 p-6 rounded-2xl shadow-lg">
    <h2 className="text-lg font-semibold text-[#fdf0d5] mb-4">Daily Progress</h2>
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={dailyData}>
        <defs>
          <linearGradient id="dailyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c1121f" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#c1121f" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis dataKey="hour" stroke="#fdf0d5" />
        <YAxis stroke="#fdf0d5" />
        <Tooltip contentStyle={{ backgroundColor: "#003049", border: "none" }} />
        <Line
          type="monotone"
          dataKey="progress"
          stroke="#c1121f"
          strokeWidth={2}
          dot={{ r: 4, fill: "#fdf0d5", stroke: "#c1121f", strokeWidth: 2 }}
          activeDot={{ r: 6 }}
          fillOpacity={1}
          fill="url(#dailyGradient)"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Weekly */}
  <div className="bg-gradient-to-br from-[#0077b6]/80 to-[#003049]/60 p-6 rounded-2xl shadow-lg">
    <h2 className="text-lg font-semibold text-[#fdf0d5] mb-4">Weekly Progress</h2>
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={weeklyData}>
        <defs>
          <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0077b6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0077b6" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis dataKey="day" stroke="#fdf0d5" />
        <YAxis stroke="#fdf0d5" />
        <Tooltip contentStyle={{ backgroundColor: "#003049", border: "none" }} />
        <Line
          type="monotone"
          dataKey="progress"
          stroke="#0077b6"
          strokeWidth={2}
          dot={{ r: 4, fill: "#fdf0d5", stroke: "#0077b6", strokeWidth: 2 }}
          activeDot={{ r: 6 }}
          fillOpacity={1}
          fill="url(#weeklyGradient)"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Monthly */}
  <div className="bg-gradient-to-br from-[#780000]/80 to-[#003049]/60 p-6 rounded-2xl shadow-lg">
    <h2 className="text-lg font-semibold text-[#fdf0d5] mb-4">Monthly Progress</h2>
    <select
      className="mb-4 p-2 border rounded text-sm"
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
    >
      {monthlyData.map((m) => (
        <option key={m.month} value={m.month}>
          {m.month}
        </option>
      ))}
    </select>
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={filteredMonthlyData}>
        <defs>
          <linearGradient id="monthlyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#780000" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#780000" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis dataKey="month" stroke="#fdf0d5" />
        <YAxis stroke="#fdf0d5" />
        <Tooltip contentStyle={{ backgroundColor: "#003049", border: "none" }} />
        <Line
          type="monotone"
          dataKey="progress"
          stroke="#780000"
          strokeWidth={2}
          dot={{ r: 4, fill: "#fdf0d5", stroke: "#780000", strokeWidth: 2 }}
          activeDot={{ r: 6 }}
          fillOpacity={1}
          fill="url(#monthlyGradient)"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

      </main>
    </div>
  );
}

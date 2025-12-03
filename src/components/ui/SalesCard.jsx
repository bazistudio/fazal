"use client";

export default function SalesCard({ title, value }) {
  return (
    <div className="bg-gradient-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-foreground flex flex-col justify-between">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

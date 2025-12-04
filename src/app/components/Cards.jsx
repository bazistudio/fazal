"use client";

export default function Cards() {
  const cardData = [
    { title: "Users", value: "1,245" },
    { title: "Revenue", value: "$34,567" },
    { title: "Orders", value: "874" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
      {cardData.map((card) => (
        <div
          key={card.title}
          className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <h3 className="text-sm font-medium text-muted-foreground">
            {card.title}
          </h3>

          <p className="text-2xl font-bold mt-1 text-foreground">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

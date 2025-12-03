export default function Cards() {
  const cardData = [
    { title: "Users", value: "1,245" },
    { title: "Revenue", value: "$34,567" },
    { title: "Orders", value: "874" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {cardData.map((card) => (
        <div
          key={card.title}
          className="bg-card p-6 rounded-lg shadow hover:shadow-md transition text-foreground"
        >
          <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

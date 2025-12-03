import Cards from "@/components/ui/cards";
import DashboardChart from "@/components/ui/charts";

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fazal Communication</h1>
      <Cards />
      <DashboardChart />
    </div>
  );
}

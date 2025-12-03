import "../app/globals.css";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar";
import Cards from "../components/ui/cards";
import DashboardChart from "../components/ui/charts";

export const metadata = {
  title: "Fazal Communication",
};

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
    <div className="flex bg-background text-foreground min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          {/* Dashboard top cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Cards title="Users" value="1,234" />
            <Cards title="Revenue" value="$12,345" />
            <Cards title="Orders" value="567" />
            <Cards title="Feedback" value="89%" />
          </div>

          {/* Dashboard charts */}
          <div className="mb-6">
            <DashboardChart />
          </div>

          {/* Render page-specific content */}
          <div>{children}</div>
        </main>
      </div>
    </div>
    </body>
    </html>
  );
}

import "../app/globals.css";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar";
import Cards from "../components/ui/cards";
import DashboardChart from "../components/ui/charts";

export const metadata = {
  title: "Fazal Communication",
  description: "Dashboard for Fazal Communication management system",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className="light-theme">
      <body className="flex bg-gradient-to-br from-[#003049]/95 via-[#003049] to-[#003049]/90 text-white min-h-screen relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#780000/15,transparent_50%),radial-gradient(circle_at_80%_20%,#0077b6/10,transparent_50%)] pointer-events-none" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle,#780000/5,transparent_70%)] blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,#0077b6/5,transparent_70%)] blur-3xl opacity-20" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#780000/5_1px,transparent_1px),linear-gradient(to_bottom,#780000/5_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
        
        <Sidebar />
        
        <div className="flex-1 flex flex-col relative z-10">
          <Navbar />

          <main className="p-6 flex-1 overflow-y-auto">
            {/* Gradient overlay for content */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#003049]/20 to-[#003049]/30 pointer-events-none" />
            
            {/* Main content container */}
            <div className="relative space-y-6">
              {/* Cards Section */}
              <div className="relative">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white mb-1">Performance </h2>
                  {/* <p className="text-white/70">Key metrics and insights at a glance</p> */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-[#c1121f] to-[#780000] rounded-full mt-2" />
                </div>
                <div className="bg-gradient-to-br from-[#003049]/50 to-[#003049]/20 backdrop-blur-sm border border-[#780000]/20 rounded-2xl p-1 shadow-xl shadow-black/10">
                  <Cards />
                </div>
              </div>

              {/* Dashboard charts */}
              <div className="relative">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white mb-1">Analytics & Trends</h2>
                  <p className="text-white/70">Visual insights and data patterns</p>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-[#c1121f] to-[#780000] rounded-full mt-2" />
                </div>
                <div className="bg-gradient-to-br from-[#003049]/50 to-[#003049]/20 backdrop-blur-sm border border-[#780000]/20 rounded-2xl p-1 shadow-xl shadow-black/10 overflow-hidden">
                  <DashboardChart />
                </div>
              </div>

              {/* Page specific content */}
              <div className="relative">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white mb-1">Detailed View</h2>
                  <p className="text-white/70">In-depth analysis and management</p>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-[#c1121f] to-[#780000] rounded-full mt-2" />
                </div>
                <div className="bg-gradient-to-br from-[#003049]/50 to-[#003049]/20 backdrop-blur-sm border border-[#780000]/20 rounded-2xl p-6 shadow-xl shadow-black/10">
                  {children}
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="px-6 py-4 border-t border-[#780000]/20 bg-gradient-to-r from-[#003049]/80 to-[#003049]/60 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/60">
                <span className="font-medium text-white/80">Fazal Communication</span> • Elevating your business communications
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Support</a>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#780000]/30 to-transparent mt-3" />
            <p className="text-xs text-white/40 text-center mt-3">
              © 2025 Fazal Communication. All rights reserved. | v1.2.0
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
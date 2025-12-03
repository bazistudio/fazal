import "../app/globals.css";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar";

export const metadata = {
  title: "Fazal Communication",
  description: "Admin Panel for Fazal Communication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}


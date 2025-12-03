import "./globals.css";
import Sidebar from "@/components/ui/sidebar";
import Navbar from "@/components/ui/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

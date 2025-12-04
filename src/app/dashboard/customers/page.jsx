"use client";



export default function CustomersPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      
      <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-4">Customers</h1>
          {/* Your customers content goes here */}
        </main>
      </div>
    </div>
  );
}

import SellerSidebar from "@/components/seller/SellerSidebar";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SellerSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
import Navbar from "@/app/components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">{children}</main>
    </>
  );
}

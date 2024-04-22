import Footer from "@/components/DashboardFooter";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section color="black">
      {children}
      <Footer/>
    </section>
  );
}

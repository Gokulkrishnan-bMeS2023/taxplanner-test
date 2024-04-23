import Footer from "@/components/DashboardFooter";

export default function DashboardLayout({
  children, 
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

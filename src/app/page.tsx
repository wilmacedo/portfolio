import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-gradient-radial" />

      <Navbar />

      <section className="pt-16 h-screen"></section>
    </main>
  );
}

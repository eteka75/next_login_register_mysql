import NavBar from "@/ui/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <h1>Home</h1>
    </main>
  );
}

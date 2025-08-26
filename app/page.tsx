import Link from "next/link";
import Navbar from "@/components/navbar";
import HomeBackground from "@/components/Background/HomeBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-blue-950">
      <HomeBackground />
      <Navbar />
      <h1 className="text-6xl font-bold mb-6">Hi, Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        Explore my work, career and Contact me.
      </p>
      <Link
        href="/about"
        className="bg-blue-300 text-purple-500 font-mono px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:scale-105 active:scale-95 transition"
      >
        Get Started!
      </Link>
    </main>
  );
}

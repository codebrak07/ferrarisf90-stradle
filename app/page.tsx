"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import SF90ScrollCanvas from "@/components/SF90ScrollCanvas";
import SF90Experience from "@/components/SF90Experience";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-pagani-black min-h-screen text-white selection:bg-pagani-gold selection:text-black">
      <Navbar />

      {/* 
        Scroll Container: 500vh tall to allow for long scroll duration.
        The content inside is sticky.
      */}
      <section ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <SF90ScrollCanvas scrollYProgress={scrollYProgress} />
          <SF90Experience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* Footer / Credits */}
      <footer className="relative z-20 bg-pagani-black py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-gray-500 text-sm tracking-widest uppercase">
            Ferrari SF90 Stradale Showcase &copy; 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

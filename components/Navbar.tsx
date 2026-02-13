"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                scrolled
                    ? "bg-pagani-black/80 backdrop-blur-md border-white/10 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <Link href="/" className="group">
                    <span className="font-display text-2xl tracking-widest font-bold text-white group-hover:text-pagani-gold transition-colors">
                        FERRARI
                    </span>
                    <span className="ml-2 font-mono text-xs text-pagani-gold tracking-[0.3em]">
                        SF90
                    </span>
                </Link>

                {/* CTA */}
                <button className="relative px-6 py-2 overflow-hidden border border-white/20 hover:border-pagani-gold group transition-colors">
                    <span className="absolute inset-0 w-full h-full bg-pagani-gold/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative font-mono text-sm tracking-widest uppercase transition-colors group-hover:text-pagani-gold">
                        Inquire
                    </span>
                </button>
            </div>
        </nav>
    );
}

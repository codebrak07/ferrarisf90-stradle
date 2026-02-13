"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { CAR_DATA } from "@/data/carData";

interface SF90ExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function SF90Experience({ scrollYProgress }: SF90ExperienceProps) {
    // --- Opacity Transforms for Phases ---

    // Phase 1: Hero (0% - 25% visible, fades out by 33%)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -50]);
    const heroScale = useTransform(scrollYProgress, [0, 0.33], [1, 0.9]);

    // Phase 2: Design (33% start, peak at 50%, end by 66%)
    const designOpacity = useTransform(scrollYProgress, [0.33, 0.4, 0.6, 0.66], [0, 1, 1, 0]);
    const designY = useTransform(scrollYProgress, [0.33, 0.66], [50, -50]);

    // Phase 3: Engine (66% start, peak at 80%, stay visible)
    const engineOpacity = useTransform(scrollYProgress, [0.66, 0.75, 1], [0, 1, 1]);
    const engineX = useTransform(scrollYProgress, [0.66, 1], [50, 0]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full px-6 relative h-screen">

                {/* --- HERO SECTION (Bottom Left) --- */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                    className="absolute bottom-24 left-6 md:left-12 max-w-xl"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex items-center space-x-4 mb-4"
                    >
                        <div className="h-[1px] w-12 bg-pagani-gold" />
                        <span className="font-mono text-pagani-gold tracking-[0.3em]">HYPERCAR</span>
                    </motion.div>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-2">
                        Ferrari <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SF90</span>
                    </h1>
                    <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-outline mb-8">
                        Stradale
                    </h2>

                    <div className="flex items-center space-x-8">
                        <div>
                            <p className="font-mono text-gray-400 text-xs tracking-widest uppercase mb-1">Starting At</p>
                            <p className="font-display text-2xl text-pagani-gold">{CAR_DATA.price}</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- DESIGN SECTION (Center Right) --- */}
                <motion.div
                    style={{ opacity: designOpacity, y: designY }}
                    className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 max-w-lg text-right"
                >
                    <div className="border border-white/10 bg-pagani-black/50 backdrop-blur-sm p-8 relative overflow-hidden group">
                        <span className="absolute top-0 right-0 w-2 h-2 bg-pagani-gold" />
                        <span className="absolute bottom-0 left-0 w-2 h-2 bg-pagani-gold" />

                        <h3 className="font-display text-4xl uppercase mb-6 text-white">
                            {CAR_DATA.phases.design.title}
                        </h3>
                        <p className="font-sans text-lg text-gray-300 leading-relaxed">
                            {CAR_DATA.phases.design.text}
                        </p>
                    </div>
                </motion.div>

                {/* --- ENGINE SECTION (Top Right -> Center) --- */}
                <motion.div
                    style={{ opacity: engineOpacity, x: engineX }}
                    className="absolute top-32 right-6 md:right-12 w-full max-w-md"
                >
                    <div className="bg-gradient-to-b from-gray-900/80 to-transparent p-6 border-t font-mono">
                        <h3 className="font-display text-3xl uppercase text-pagani-gold mb-8 text-right">
                            {CAR_DATA.phases.engine.title}
                        </h3>

                        <div className="space-y-6">
                            {Object.entries(CAR_DATA.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">{key}</span>
                                    <span className="text-lg text-white text-right">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: heroOpacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-pagani-gold to-transparent" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gray-500">Scroll to Explore</span>
            </motion.div>
        </div>
    );
}

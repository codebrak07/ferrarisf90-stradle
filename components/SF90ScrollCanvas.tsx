"use client";

import { useMotionValueEvent, useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SF90ScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames?: number;
}

export default function SF90ScrollCanvas({
    scrollYProgress,
    totalFrames = 240, // Updated to 240 frames
}: SF90ScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const frameIndex = i + 1;
            const filename = `frame-${frameIndex.toString().padStart(3, "0")}.jpg`;
            img.src = `/images/sf90-sequence/${filename}`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                    imagesRef.current = imgArray;
                }
            };
            // Keep order correct even if load order differs
            imgArray[i] = img;
        }
    }, [totalFrames]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;

        // Safety check for images
        if (!canvas || !imagesRef.current || imagesRef.current.length === 0) return;

        const ctx = canvas.getContext("2d");
        const img = imagesRef.current[index];

        if (!ctx || !img || !img.complete) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        // Set internal resolution
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, rect.width, rect.height);

        const imgRatio = img.width / img.height;
        const canvasRatio = rect.width / rect.height;

        let renderWidth, renderHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            renderHeight = rect.height;
            renderWidth = img.width * (rect.height / img.height);
            offsetX = (rect.width - renderWidth) / 2;
            offsetY = 0;
        } else {
            renderWidth = rect.width;
            renderHeight = img.height * (rect.width / img.width);
            offsetX = 0;
            offsetY = (rect.height - renderHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    useEffect(() => {
        if (isLoaded) {
            requestAnimationFrame(() => renderFrame(0));
        }
    }, [isLoaded]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded) return;
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * (totalFrames - 1))
        );
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <canvas
                ref={canvasRef}
                className="h-full w-full object-contain"
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-pagani-black z-50">
                    <div className="text-pagani-gold font-display text-2xl animate-pulse tracking-widest">
                        INITIALIZING SYSTEMS
                    </div>
                    <div className="mt-4 w-64 h-1 bg-carbon-gray overflow-hidden">
                        <div className="h-full bg-pagani-gold w-full animate-pulse" />
                    </div>
                </div>
            )}
        </div>
    );
}

import { motion, AnimatePresence } from "motion/react";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import React from "react";

export default function ProjectCard({ title, description, link }) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative border border-black/[0.2] dark:border-white/[0.2] overflow-hidden rounded-xl p-6 h-[18rem] flex flex-col justify-between items-start bg-emerald-900 dark:bg-emerald-900 group transition-colors duration-300"

        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={3.5}
                            containerClassName="bg-emerald-900"
                            colors={[
                                [56, 189, 248],
                                [34, 197, 94],
                                [132, 204, 22],
                            ]}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10">
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-white transition">
                    {title}
                </h3>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 group-hover:text-gray-100 transition">
                    {description}
                </p>
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-4 inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:text-white transition"
            >
                View on GitHub →
            </a>
        </div>
    );
}


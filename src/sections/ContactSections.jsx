"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative contact-section overflow-hidden flex flex-col items-center justify-center text-center py-20"
        >
            <div className="absolute inset-0 -z-10">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={600}
                    baseHue={160}
                    className="w-full h-full"
                />
            </div>

            <h2 className="section-title text-emerald-400 relative z-10">Contacts</h2>
            <p className="contact-description text-emerald-200 max-w-2xl mx-auto relative z-10">
                I’m currently open to opportunities and collaborations. You can reach me via LinkedIn or email.
            </p>

            <div className="contact-buttons mt-6 relative z-10 flex flex-wrap justify-center gap-4">
                <a
                    href="https://www.linkedin.com/in/melinda-t%C3%A1rsi-198782390/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-md border border-emerald-500/30 bg-emerald-700/40 text-emerald-200 hover:shadow-[0_0_20px_rgba(52,211,153,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
                    aria-label="Open LinkedIn profile of Társi Melinda"
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:melindatarsi9@gmail.com"
                    className="px-6 py-2 rounded-md border border-emerald-500/30 bg-emerald-700/40 text-emerald-200 hover:shadow-[0_0_20px_rgba(52,211,153,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
                    aria-label="Send email to melindatarsi9@gmail.com"
                >
                    Email
                </a>

                <a
                    href="https://github.com/tarsimelinda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-md border border-emerald-500/30 bg-emerald-700/40 text-emerald-200 hover:shadow-[0_0_20px_rgba(52,211,153,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
                    aria-label="Open GitHub profile of Társi Melinda"
                >
                    GitHub
                </a>
            </div>

            <p className="contact-note text-emerald-300/80 mt-6 relative z-10">
                Preferred channel: email.
            </p>
        </section>
    );
}

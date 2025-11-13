"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function getErrorMessage(err) {
    if (!err) return "Email send failed.";
    if (typeof err === "string") return err;
    return err?.text || err?.message || String(err) || "Email send failed.";
}

export default function ContactFormSection() {
    const formRef = useRef(null);
    const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ sending: true, ok: null, error: "" });

        const fd = new FormData(formRef.current);
        if (fd.get("company")) {
            setStatus({ sending: false, ok: true, error: "" });
            formRef.current.reset();
            return;
        }

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setStatus({ sending: false, ok: false, error: "Missing env vars." });
            console.error("EmailJS configuration missing. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.");
            return;
        }

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
            setStatus({ sending: false, ok: true, error: "" });
            formRef.current.reset();
        } catch (err) {
            const errorMessage = getErrorMessage(err);
            console.error("EmailJS send error:", err);
            setStatus({ sending: false, ok: false, error: errorMessage });
        }
    }

    return (
        <section id="message" className="relative bg-black text-emerald-100 py-24 px-6 sm:py-32 lg:px-8 overflow-hidden">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl text-center">
                    Connect with me
                </h2>
                <p className="mt-2 text-lg text-emerald-200 text-center">
                    Get in touch using the form below.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-16 max-w-xl mx-auto space-y-6" noValidate>
                    <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <input
                                id="first-name"
                                name="first_name"
                                type="text"
                                placeholder="First name"
                                className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                placeholder:text-emerald-300/70 outline outline-1 outline-white/10
                focus:outline-2 focus:outline-emerald-400 transition-all duration-300
                focus:shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                            />
                        </div>

                        <div>
                            <input
                                id="last-name"
                                name="last_name"
                                type="text"
                                placeholder="Last name"
                                className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                placeholder:text-emerald-300/70 outline outline-1 outline-white/10
                focus:outline-2 focus:outline-emerald-400 transition-all duration-300
                focus:shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <input
                                id="email"
                                name="user_email"
                                type="email"
                                required
                                placeholder="Email"
                                className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                placeholder:text-emerald-300/70 outline outline-1 outline-white/10
                focus:outline-2 focus:outline-emerald-400 transition-all duration-300
                focus:shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Type your message here..."
                                className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                placeholder:text-emerald-300/70 outline outline-1 outline-white/10
                focus:outline-2 focus:outline-emerald-400 transition-all duration-300
                focus:shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                            />
                        </div>
                    </div>

                    <div className="pt-8">
                        <button
                            type="submit"
                            disabled={status.sending}
                            className="w-full rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white
              hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.9)] transform hover:-translate-y-0.5
              transition-all duration-300 disabled:opacity-60"
                        >
                            {status.sending ? "Sending..." : "Let’s talk"}
                        </button>

                        <p className="mt-3 text-sm" role="status" aria-live="polite">
                            {status.ok && "Thank you! Contacting you soon."}
                            {status.ok === false && <span className="text-red-300">Error: {status.error}</span>}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function ContactFormSection() {
    return (
        <section
            id="message"
            className="relative bg-black text-emerald-100 py-24 px-6 sm:py-32 lg:px-8 overflow-hidden"
        >

            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl text-center">
                    Connect with me
                </h2>
                <p className="mt-2 text-lg text-emerald-200 text-center">
                    Get in touch using the form below.
                </p>

                <form action="#" method="POST" className="mt-16 max-w-xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            
                            <input
                                id="first-name"
                                name="first-name"
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
                                name="last-name"
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
                                name="email"
                                type="email"
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
                            className="w-full rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white
                hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.9)] transform hover:-translate-y-0.5
                transition-all duration-300"
                        >
                            Let’s talk
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

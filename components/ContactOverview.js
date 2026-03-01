"use client";
import Image from "next/image";

export default function ContactOverview({
    titleTop,
    titleMain,
    description,
    hashtag,
    points = [],
    stats = [],
    bgColor = "bg-[#f3efef]",
    submitText = "Submit",
    onSubmit,

    // 🔥 NEW PROPS
    showForm = true,
    showRightContent = true,
    showImageInsteadOfForm = false,
    imageSrc,
    imageAlt = "Contact Image",
}) {
    return (
        <section className="w-full py-16 xl:px-20 2xl:px-8">
            <div
                className={`max-w-7xl mx-auto px-4 grid ${showRightContent ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                    } gap-30 items-start`}
            >
                {/* LEFT SIDE */}
                {showForm && !showImageInsteadOfForm && (
                    <div className={`rounded-3xl p-8 md:p-12 ${bgColor}`}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit && onSubmit(e);
                            }}
                            className="space-y-4"
                        >
                            <input className="w-full p-4 rounded-lg outline-none" placeholder="Full Name" />
                            <input className="w-full p-4 rounded-lg outline-none" placeholder="Email*" />
                            <input className="w-full p-4 rounded-lg outline-none" placeholder="Phone*" />
                            <input className="w-full p-4 rounded-lg outline-none" placeholder="Which Business Are You Planning to Start" />

                            <label className="flex gap-2 text-xs">
                                <input type="checkbox" defaultChecked />
                                I agree to EWBS Business Services to collect my details to contact me.
                            </label>

                            <button className="w-full bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-red-50 transition">
                                {submitText}
                            </button>
                        </form>
                    </div>
                )}

                {/* IMAGE MODE */}
                {showImageInsteadOfForm && (
                    <div data-aos="fade-up" className="relative w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* RIGHT CONTENT */}
                {showRightContent && (
                    <div data-aos="fade-up">
                        <p className="text-xs tracking-widest text-gray-500 mb-2">
                            {titleTop}
                        </p>

                        <h2 className="text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-red-600 mb-4">
                            {titleMain}
                        </h2>

                        <p className="text-gray-600 mb-4 max-w-lg">{description}</p>
                        <p className="text-gray-500 mb-6">{hashtag}</p>

                        <ul className="space-y-3 mb-10">
                            {points.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-sm">
                                        ✓
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-12">
                            {stats.map((s, i) => (
                                <div key={i}>
                                    <p className="text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-red-600">
                                        {s.value}
                                    </p>
                                    <p className="text-gray-500 text-sm">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
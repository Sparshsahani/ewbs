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
                    <div className={`rounded-3xl p-2 md:px-12 ${bgColor}`}>
                        <iframe
                            id="xxgjl9cdy3MIg0ldO6XF"
                            src="https://msgsndr.com/widget/form/xxgjl9cdy3MIg0ldO6XF"
                            style={{ borderWidth: 0, borderStyle: "none", width: "100%", minHeight: "400px", padding: 0 }}
                            scrolling="no"
                        />
                        <script src="https://msgsndr.com/js/form_embed.js" />
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
import Image from "next/image";

export default function Banner({
  aos = "fade-up",
}) {
  return (
    <section
      data-aos={aos}
      className="relative w-full bg-[var(--bg-red)]">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-5 py-8 md:py-0 md:pl-10 xl:pl-30 2xl:pl-20">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl font-sans">
            Let's{" "}
            <span className="font-semibold italic underline decoration-2 underline-offset-4">
              Discuss &amp; Start
            </span>
          </h2>
        </div>

        {/* Right Side: Yellow Bar */}
        <div className="w-full md:w-1/2 bg-[var(--button-color)] flex items-center justify-between px-6 py-4 md:py-8 lg:px-12 xl:pr-30 2xl:pr-20">
          <div className="text-left">
            <h3 className="text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl text-[var(--bg-red)] font-semibold">
              5000+
            </h3>
            <p className="text-sm md:text-base text-[var(--bg-red)] mt-1 font-medium">
              Worldwide clients
            </p>
          </div>

          <div className="w-32 sm:w-40 md:w-44 h-auto flex items-center justify-center">
            <Image
              src="/images/assets/screen_01.png"
              alt="decorative user avatars"
              width={300}
              height={100}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
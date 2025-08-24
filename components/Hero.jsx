import Image from "next/image";
import Header from "./Header";
import ChipsRow from "./ChipsRow.jsx";
import { SearchIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section className="relative h-[700px] w-full">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Bulgaria mountains"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      {/* Transparent header on top of hero */}
      <Header variant="transparent" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container h-full flex flex-col justify-end pb-8">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-medium tracking-wide uppercase opacity-90">
              Български туристически съюз
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold leading-tight">
              Седемте Рилски Езера
            </h1>
            <p className="mt-3 text-white/90">
              Открий най-красивите маршрути, обекти и събития в страната.
            </p>

            {/* Search bar */}
            <div className="mt-5 bg-white/90 backdrop-blur rounded-2xl p-2 shadow-card max-w-xl">
              <div className="flex items-center gap-2">
                <SearchIcon className="w-5 h-5 text-gray-500" />
                <input
                  className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500 py-2"
                  placeholder="Търси дестинация, събитие, обект..."
                />
                <button className="px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700">
                  Търси
                </button>
              </div>
            </div>
          </div>

          {/* Chips row */}
          <div className="mt-6">
            <ChipsRow />
          </div>
        </div>
      </div>
    </section>
  );
}

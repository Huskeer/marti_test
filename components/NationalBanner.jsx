import Image from "next/image";

export default function NationalBanner() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-card">
          <Image src="/images/national.jpg" alt="Национални туристически обекти" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold">Национални Туристически Обекта</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

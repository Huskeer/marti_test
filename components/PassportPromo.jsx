export default function PassportPromo() {
  return (
    <section className="py-6">
      <div className="container">
        <div className="rounded-2xl bg-brand-700 text-white p-6 md:p-8 shadow-card relative overflow-hidden">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold mb-2">Вземи дигитален паспорт от БТС</h3>
            <p className="text-white/90">
              Събирай печати от обекти, отключвай постижения и планирай твоите маршрути.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="bg-white text-brand-700 px-4 py-2 rounded-xl font-medium">
                Изтегли приложението
              </button>
              <button className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl">
                Научи повече
              </button>
            </div>
          </div>
          {/* Decorative image on right (optional) */}
          <div className="hidden md:block absolute right-4 bottom-0 w-[260px] h-[180px] bg-[url('/images/promo-passport.jpg')] bg-contain bg-no-repeat bg-bottom opacity-95" />
        </div>
      </div>
    </section>
  );
}

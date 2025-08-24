export default function WeatherTeaser() {
  return (
    <section className="py-6">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white p-6 md:p-8 shadow-card flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Какво ще е времето…?</h3>
            <p className="text-white/90">Провери прогнозата преди да тръгнеш на път.</p>
          </div>
          <div className="text-6xl">⛅</div>
        </div>
      </div>
    </section>
  );
}

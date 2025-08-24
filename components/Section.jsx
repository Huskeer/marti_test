export default function Section({ title, subtitle, children, right }) {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mb-5 flex items-end justify-between">
          <div>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
            <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
          </div>
          {right}
        </div>
        {children}
      </div>
    </section>
  );
}

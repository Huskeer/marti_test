import Section from "./Section";

const groups = [
  { name: "БТС София" }, { name: "Етрополе" }, { name: "Самоков" }, { name: "Бургас" },
  { name: "Дупница" }, { name: "Варна" }, { name: "Пловдив" }, { name: "Севлиево" },
];

export default function Associations() {
  return (
    <Section title="Туристически Дружества" right={<a className="text-brand-700 text-sm font-medium" href="#">Всички</a>}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white shadow-card p-4">
          <h4 className="font-semibold mb-3">БТС области</h4>
          <div className="flex flex-wrap gap-2">
            {groups.map(g => (
              <span key={g.name} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                {g.name}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-card p-4">
          <h4 className="font-semibold mb-3">Общински дружества</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {groups.concat(groups).map((g, i) => (
              <li key={i} className="px-3 py-2 rounded-lg bg-gray-50">{g.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

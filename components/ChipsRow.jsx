import { MountainIcon, TentIcon, CameraIcon, MapIcon, FireIcon, WrenchIcon } from "./Icons.jsx";

const chips = [
  { label: "Маршрути", icon: MountainIcon },
  { label: "Хижи", icon: TentIcon },
  { label: "Галерия", icon: CameraIcon },
  { label: "Карта", icon: MapIcon },
  { label: "Събития", icon: FireIcon },
  { label: "Помощ", icon: WrenchIcon },
  { label: "Туристически обекти", icon: CameraIcon },
  { label: "Дружества", icon: TentIcon },
];

export default function ChipsRow() {
  return (
    <div className="overflow-x-auto scroll-smooth scroll-shadows">
      <div className="flex items-center gap-3 min-w-max">
        {chips.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.label}
              className="flex items-center gap-2 bg-white/90 text-gray-800 hover:bg-white rounded-xl px-3 py-2 shadow"
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{c.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

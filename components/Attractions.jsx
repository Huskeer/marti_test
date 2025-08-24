import Section from "./Section";
import CardImage from "./CardImage";

export default function Attractions() {
  const items = [
    { src: "/images/attr-1.jpg", title: "Крепост", subtitle: "Исторически обект" },
    { src: "/images/attr-2.jpg", title: "Пещера", subtitle: "Природен феномен" },
    { src: "/images/attr-3.jpg", title: "Екопътека", subtitle: "Маршрут" },
    { src: "/images/attr-4.jpg", title: "Манастир", subtitle: "Културен обект" },
  ];
  return (
    <Section title="Забележителности">
      <div className="overflow-x-auto scroll-smooth scroll-shadows">
        <div className="flex gap-4 min-w-max">
          {items.map((x) => <CardImage key={x.title} {...x} />)}
        </div>
      </div>
    </Section>
  );
}

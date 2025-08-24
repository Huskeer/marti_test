import Section from "./Section";
import CardImage from "./CardImage";

export default function NearYou() {
  const items = [
    { src: "/images/near-1.jpg", title: "Рила", subtitle: "45 км" },
    { src: "/images/near-2.jpg", title: "Пирин", subtitle: "82 км" },
    { src: "/images/near-3.jpg", title: "Витоша", subtitle: "15 км" },
    { src: "/images/near-4.jpg", title: "Стара планина", subtitle: "150 км" },
  ];
  return (
    <Section title="Близо до теб">
      <div className="overflow-x-auto scroll-smooth scroll-shadows">
        <div className="flex gap-4 min-w-max">
          {items.map((x) => <CardImage key={x.title} {...x} />)}
        </div>
      </div>
    </Section>
  );
}

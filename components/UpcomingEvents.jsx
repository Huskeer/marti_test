import Section from "./Section";
import EventBox from "./EventBox";

export default function UpcomingEvents() {
  const events = [
    { title: "Обичай Стара Марта", location: "Баня, Карлово", date: "06.02.2025, 09:30", imageUrl: "/images/event-1.jpg", price: "Безплатно" },
    { title: "Фестивал на носията", location: "Жеравна", date: "04.08.2025, 09:30", imageUrl: "/images/event-2.jpg", price: "20 лв." },
    { title: "Пролетен събор", location: "Копривщица", date: "28.04.2025, 10:00", imageUrl: "/images/event-3.jpg", price: "10 лв." },
    { title: "Обичай Стара Марта", location: "Баня, Карлово", date: "06.02.2025, 09:30", imageUrl: "/images/event-4.jpg", price: "Безплатно" },
  ];

  return (
    <Section title="Предстоящи събития" right={<a className="text-brand-700 text-sm font-medium" href="#">Виж всички</a>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {events.map((e, i) => <EventBox key={i} {...e} />)}
      </div>
    </Section>
  );
}

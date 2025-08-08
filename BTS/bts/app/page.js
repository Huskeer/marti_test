import FiltersAndSearch from "@/components/boxes/FiltersAndSearch";
import EventBox from "@/components/boxes/EventBox";
import Pagination from "@/components/boxes/Pagination";

const events = new Array(12).fill(
  {
    title: "Обичай Стара Марта",
    location: "Баня, Карлово",
    organizer: "с. Жернов",
    date: "06.02.2025, 09:30",
    imageUrl: "/images/marta2.jpg",
    price: "Безплатно",
  },
  {
    title: "Фестивал на фолклорната носия",
    location: "с.Забърдо, Смолян",
    organizer: "с. Жернов",
    date: "18-22.02.2025, 08:30",
    imageUrl: "/images/nosiq.png",
    price: "40 лв.",
  }
);

export default function EventsPage() {
  return (
    <div className="px-6 py-10 max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-manrope font-bold mb-6 text-[#00897B]">Събития</h1>

      <FiltersAndSearch />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event, idx) => (
          <EventBox key={idx} {...event} />
        ))}
      </div>

      <Pagination />
    </div>
  );
}

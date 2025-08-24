import Image from "next/image";
import { LocationIcon, CalendarIcon, HeartLineIcon } from "./Icons.jsx";

export default function EventBox({ title, location, date, imageUrl, price = "Безплатно" }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden relative hover:shadow-md transition">
      <div className="relative w-full h-[180px]">
        <Image src={imageUrl} alt={title} fill className="object-cover" sizes="(max-width:768px) 50vw, 286px" />
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow">
          <HeartLineIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="px-4 pt-4 pb-3">
        <h3 className="text-[#18181B] text-[15px] font-semibold leading-tight">{title}</h3>

        {/* Price badge under title */}
        <span className="inline-block w-fit bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full mt-2">
          {price}
        </span>

        <div className="text-[#71717A] text-[13px] space-y-[6px] mt-3">
          <p className="flex items-center">
            <LocationIcon className="w-4 h-4 mr-1" />
            {location}
          </p>
          <p className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import LocationIcon from "../Icons/Icons";
import { CalendarIcon } from "../Icons/Icons";
const EventBox = ({ title, location, organizer, date, imageUrl, price }) => {
  return (
    <div className="bg-white border border-[#E4E4E7] rounded-xl overflow-hidden relative hover:shadow-md transition">
      <div className="relative w-full h-[180px]">
        <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 50vw, 286px"
        />
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 6.755a5.754 5.754 0 00-9.652-2.14l-.6.638-.6-.638a5.754 5.754 0 00-9.652 2.14 5.876 5.876 0 001.433 6.64l8.387 8.387a.75.75 0 001.06 0l8.387-8.387a5.876 5.876 0 001.433-6.64z"
            />
          </svg>
        </button>
      </div>

      
      <div className="px-4 pt-4 pb-3 flex flex-col justify-between ">
      <h3 className="font-manrope text-[#18181B] text-[15px] font-bold leading-tight">
        {title}
      </h3>
      <span className="font-manrope inline-block w-fit bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full mt-2">
        {price}
      </span>

      <div className="font-manrope text-[#71717A] text-[13px] space-y-[6px] mt-3">
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
};

export default EventBox;

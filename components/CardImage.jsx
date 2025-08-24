import Image from "next/image";

export default function CardImage({ src, title, subtitle }) {
  return (
    <div className="min-w-[220px] w-[220px] rounded-xl overflow-hidden bg-white shadow-card">
      <div className="relative h-36 w-full">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3">
        <div className="font-medium">{title}</div>
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>
    </div>
  );
}

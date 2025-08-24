import Link from "next/link";
import { LogoIcon, SearchIcon, UserIcon } from "./Icons.jsx";

/**
 * Props:
 *  - variant: "transparent" | "solid"
 */
export default function Header({ variant = "solid" }) {
  const isTransparent = variant === "transparent";

  return (
    <header
      className={[
        "w-full top-0 z-40",
        isTransparent ? "absolute bg-transparent" : "sticky bg-brand-700",
      ].join(" ")}
    >
      <div className="container">
        <div className="flex items-center justify-between py-3">
          {/* Left */}
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon className="w-9 h-9 text-white" />
            <span className={isTransparent ? "text-white font-semibold" : "text-white font-semibold"}>
              Национален Туристически Портал
            </span>
          </Link>

          {/* Center nav (static) */}
          <nav className="hidden md:flex items-center gap-6">
            {["Дестинации","Събития","Обекти","Дружества"].map((item) => (
              <Link
                key={item}
                href="#"
                className={[
                  "text-sm font-medium hover:opacity-90",
                  isTransparent ? "text-white" : "text-white",
                ].join(" ")}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              className={[
                "hidden sm:flex items-center gap-2 rounded-full px-3 py-2 text-sm",
                isTransparent ? "bg-white/10 text-white backdrop-blur border border-white/20" : "bg-white text-gray-800",
              ].join(" ")}
            >
              <SearchIcon className="w-4 h-4" />
              Търсене
            </button>

            <button
              className={[
                "flex items-center gap-2 rounded-full px-3 py-2 text-sm",
                isTransparent ? "bg-white/10 text-white backdrop-blur border border-white/20" : "bg-white text-gray-800",
              ].join(" ")}
            >
              <UserIcon className="w-4 h-4" />
              Вход
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

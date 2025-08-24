import Hero from "@/components/Hero";
import NearYou from "@/components/Nearyou.jsx";
import PassportPromo from "@/components/PassportPromo";
import UpcomingEvents from "@/components/UpcomingEvents";
import WeatherTeaser from "@/components/WeatherTeaser";
import Attractions from "@/components/Attractions";
import Associations from "@/components/Associations";
import NationalBanner from "@/components/NationalBanner";

export default function Page() {
  return (
    <>
      <Hero />
      <NearYou />
      <PassportPromo />
      <UpcomingEvents />
      <WeatherTeaser />
      <Attractions />
      <Associations />
      <NationalBanner />
    </>
  );
}

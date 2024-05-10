import CountryList from "@/components/CountryList";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Homepage />
      <CountryList />
    </main>
  );
}

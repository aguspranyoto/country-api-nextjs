import CountryList from "@/components/CountryList";
import Homepage from "@/components/Homepage";

export default function Home({ searchParams }: any) {
  const name = searchParams?.name ?? "";
  return (
    <main className="container mx-auto">
      <Homepage />
      <CountryList name={name} />
    </main>
  );
}

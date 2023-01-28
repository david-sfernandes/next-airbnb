import { format } from "date-fns";
import Image from "next/image";
import Button from "../../components/Button";
import InfoCard from "../../components/InfoCard";

type ParamsProps = {
  location: string;
  startDate: string;
  endDate: string;
  noOfGuests: string;
};

export async function getSearchResults() {
  const searchResults: SearchResult[] = await fetch(
    "https://www.jsonkeeper.com/b/5NPS",
    { cache: "no-store" }
  ).then((res) => res.json());
  return searchResults;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: ParamsProps;
}) {
  const { location, noOfGuests } = searchParams;
  const searchResults: SearchResult[] = await getSearchResults();

  return (
    <main className="flex">
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">300+ stay for {noOfGuests ? noOfGuests : 1} number of guests</p>
        <h1 className="text-3xl font-semiboldmt-2 mb-6">Stay in {location ? location : "Brazil"}</h1>
        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <Button text="Cancellation Flexibility" />
          <Button text="Type of Place" />
          <Button text="Price" />
          <Button text="Rooms and Beds" />
          <Button text="More Filters" />
        </div>
        {searchResults.map((item) => (
          <InfoCard props={item} />
        ))}
      </section>
      <section className="hidden relative xl:inline-flex xl:min-w-[595px] overflow-x-hidden">
        <Image
          src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5e9ec9b5babce63530d2abe1_dark_map%402x.jpg"
          alt="Map example"
          className="bg-cover min-w-fit"
          fill
        />
      </section>
    </main>
  );
}

import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import Banner from "../components/Banner";
import LargeCard from "../components/LargeCard";

type DataProps = {
  exploreData: Destination[];
  cardsData: Card[];
};

export async function getData() {
  // { cache: 'force-cache' } is similar to `getStaticProps` and is default in fetch API
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return { exploreData, cardsData };
}

export default async function HomePage() {
  const { exploreData, cardsData }: DataProps = await getData();

  return (
    <div>
      <Banner />

      <main className=" max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, img, distance }) => (
              <SmallCard
                key={location}
                location={location}
                img={img}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({img, title}) => (
              <MediumCard key={title} img={img} title={title}/>
            ))}
          </div>
        </section>
        <LargeCard img='https://links.papareact.com/4cj' title="The Gratest Outdoors" description="Wishlists curated by Airbnb" buttonText="Get Inspired"/>
      </main>
    </div>
  );
}

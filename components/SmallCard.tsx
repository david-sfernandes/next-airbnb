import Image from "next/image";

export default function SmallCard({ img, location, distance }: Destination) {
  return (
    <div className="flex items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} fill className="rounded-lg" />
      </div>
      <div className="">
        <h3 className="text-gray-500">{location}</h3>
        <p>{distance}</p>
      </div>
    </div>
  );
}

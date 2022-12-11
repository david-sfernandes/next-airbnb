import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        className="bg-cover"
        src="https://links.papareact.com/0fm"
        alt="Banner"
        fill
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="rounded-full bg-white text-purple-500 shadow-md px-10 py-4 font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

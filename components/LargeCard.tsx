import Image from "next/image";

type LargeCard = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: LargeCard) {
  return (
    <section className="relative py-16 cursor-pointer hover:hover:scale-105">
      <div className="relative w-full h-80 min-h-[300px]">
        <Image src={img} alt={title} fill className="bg-cover rounded-2xl" />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

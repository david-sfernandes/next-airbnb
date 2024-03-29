import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, Range } from "react-date-range";
import Link from "next/link";

export default function Header() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearch("");
  };

  const sectionRange: Range = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <Link href="/" className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          className="object-contain"
          src="https://links.papareact.com/qd3"
          alt="Logo"
          fill
        />
      </Link>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2" />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="cursor-pointer hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {search && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[sectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(Number(e.target.value))}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <Link href={{
              pathname: "/search",
              query: {
                location: search,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: noOfGuests
              }
            }} className="flex-grow text-red-400">
              Search
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

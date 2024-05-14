import { SlOptions } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import medium from "../assets/medium-logo.svg";
import { Link } from "react-router-dom";
import { useAuthor } from "../hooks";

interface AppbarProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export const Appbar = ({ open, setOpen }: AppbarProps) => {
  const { author } = useAuthor();
  return (
    <div className=" w-full border-b border-slate-300 flex flex-row justify-between px-6 py-2">
      <Link to="/blogs" className="flex flex-row ">
        <img src={medium} alt="medium logo" className="h-10 w-10" />
      </Link>
      <div className="flex flex-row items-center gap-4">
        {setOpen ? (
          // <Link to={"/publish"}>
          <button
            type="button"
            className="block text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2"
            onClick={() => {
              setOpen(!open);
            }}
          >
            New
          </button>
        ) : // </Link>
        null}

        <SlOptions />
        <GoBell />
        <Avatar name={author?.name || "?"} />
      </div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className=" font-normal text-base text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

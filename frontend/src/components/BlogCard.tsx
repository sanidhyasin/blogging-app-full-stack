import { BsBookmarkPlus } from "react-icons/bs";
import { TbCircleMinus } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  id: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col p-4 gap-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex items-center mb-4">
          <Avatar name={authorName} />
          <div className="font-normal pl-2">{authorName}</div>
          <div className="pl-2 text-slate-500 text-xs">&#9679;</div>
          <div className="pl-2 font-thin text-slate-500">{publishDate}</div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-lg capitalize">{title}</div>
          <div>
            <p className="line-clamp-2">{content.slice(0, 200) + "..."}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className=" text-slate-500">{`${Math.ceil(
            content.length / 100
          )} minutes`}</div>
          <div className=" flex flex-row gap-3 text-slate-500">
            <BsBookmarkPlus />
            <TbCircleMinus />
            <SlOptions />
          </div>
        </div>
        <div className="bg-slate-300 h-0.5"></div>
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className=" font-extralight text-xs text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

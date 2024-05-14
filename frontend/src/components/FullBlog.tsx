import { Avatar } from "./Appbar";

interface FullBlogProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  // id: string;
}

export const FullBlog = ({
  authorName,
  title,
  content,
  publishDate,
}: // id,
FullBlogProps) => {
  return (
    <div className="m-auto h-full flex flex-row py-16 px-10 max-w-screen-xl gap-5">
      <div className="flex basis-3/4 flex-col gap-4">
        <h1 className=" text-5xl font-extrabold capitalize">{title}</h1>
        <p className=" text-base font-medium text-gray-500">{publishDate}</p>
        <p className="text-lg text-wrap font-normal">{content}</p>
      </div>
      <div className="flex basis-1/4 flex-col gap-4">
        <p className=" text-lg font-medium">Author</p>
        <div className=" flex flex-row gap-4">
          <div className="">
            <Avatar name={authorName} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" text-xl font-bold capitalize">{authorName}</h1>
            <p className=" text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quisquam natus error tempora ipsa commodi eum possimus unde ipsam
              rerum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

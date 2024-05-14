import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { AppbarSkeleton, BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { Publish } from "./Publish";
import { useState } from "react";

export const Blogs = () => {
  const [open, setOpen] = useState(false);
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <AppbarSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <>
      <Appbar open={open} setOpen={setOpen} />
      <div className="relative flex justify-center">
        <div
          className={`${
            open ? "opacity-50" : "opacity-100"
          } flex flex-col justify-center `}
        >
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishDate={"27th april 2024"}
            />
          ))}
        </div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute z-50 w-1/2 shadow-slate-700 top-20 shadow-2xl`}
        >
          <Publish open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

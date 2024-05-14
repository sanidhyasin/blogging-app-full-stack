import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PublishProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Publish = ({ open, setOpen }: PublishProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-10 gap-5 m-auto bg-white w-full h-full">
      <div>
        <textarea
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="message"
          rows={2}
          className=" p-2.5 w-full rounded-lg border font-normal text-xl border-slate-400"
          placeholder="Title"
          required
        />
      </div>
      <div>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          id="message"
          rows={10}
          className="p-2.5 w-full text-base text-gray-900 border-slate-400 rounded-lg border font-normal "
          placeholder="Write your thoughts here..."
          required
        />
      </div>
      <div className="flex flex-row border-t-2 py-4">
        <button
          onClick={async () => {
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
              {
                title,
                content,
              },
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              }
            );
            navigate(`/blog/${response.data.id}`);
          }}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Publish
        </button>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Discard
        </button>
      </div>
    </div>
  );
};

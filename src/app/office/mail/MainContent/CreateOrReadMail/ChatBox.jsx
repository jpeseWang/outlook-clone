"use client";
import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";

export default function ChatBox({ id, data, reload }) {
  const [uploading, setUploading] = useState(false);
  const [content, setContent] = useState("");
  const session = useSession();
  let date = new Date().toUTCString().slice(5, 16);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const response = await fetch(`/api/inbox/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: session.data.fullname,
          id: session.data.id,
          avatar: session.data.avatar,
          content,
          date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Rating updated successfully");
      } else {
        console.error("Failed to update rating");
      }
      reload();
      e.target.reset();
      setUploading(false);
    } catch (error) {
      console.error("Error updating rating:", error);
      toast.error("Error updating rating");
    }
  };

  return (
    <form className="bg-[#272A37] rounded-lg my-6" onSubmit={handleSubmit}>
      <div className="title mx-4 py-2">
        <h1 className="text-white">Brookyn simon</h1>
        <p className="text-sm text-gray-400">Online</p>
      </div>
      <div className="text area bg-[#323644] rounded-lg text-gray-100 shadow-xl">
        {data.comment &&
          data.comment
            .slice()
            .reverse()
            .map((mess, index) => (
              <div key={index}>
                {" "}
                <p className="px-9 py-4"> {mess.content}</p>
              </div>
            ))}
      </div>
      <div className="flex py-4 mx-6">
        {/* <div className="bg-[#424656] px-2 py-2 mx-4 rounded-lg text-white hover:bg-[#e8a735] cursor-pointer hover:shadow-lg shadow-lg shadow-yellow-500/50">
          <PlusCircleIcon className="h-6 w-6 inline " />
        </div> */}
        <input
          className="bg-[#424656] ring-2 ring-[#1D90F5] rounded-lg px-10 py-1.5 placeholder:text-sm placeholder:text-gray-100 shadow-lg shadow-blue-500/50 text-white"
          placeholder="Type something..."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button
          className="bg-[#424656] px-2 py-2 mx-4 rounded-lg text-white hover:bg-[#1D90F5] cursor-pointer hover:shadow-lg shadow-lg shadow-blue-500/50"
          type="submit"
        >
          <PaperAirplaneIcon className="h-6 w-6 inline " />
        </button>
      </div>
    </form>
  );
}

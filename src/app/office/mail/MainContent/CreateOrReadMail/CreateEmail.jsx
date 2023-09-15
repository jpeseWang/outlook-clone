"use client";
import { useState, useEffect, useContext } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { CurrentTabContext } from "@/context/CurrentTabContext";
import { getCurrentFormattedDate } from "@/utils/getCurrentFormattedDate";
let ReactQuill;

export default function CreateEmail() {
  const [uploading, setUploading] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [receiver, setReceiver] = useState("");
  const [quillLoaded, setQuillLoaded] = useState(false);

  const { updateCreateOrViewMailTab } = useContext(CurrentTabContext);
  const session = useSession();

  let date = new Date().toUTCString().slice(5, 16);
  let datetime = getCurrentFormattedDate();

  //Dynamically import React Quill
  useEffect(() => {
    import("react-quill").then((module) => {
      ReactQuill = module.default;
      setQuillLoaded(true);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      await fetch("/api/inbox", {
        method: "POST",
        body: JSON.stringify({
          sender: session.data.email,
          receiver: receiver,
          subject,
          content,
          date,
          datetime,
          senderFullname: session.data.fullname,
          senderAvatar: session.data.avatar,
          senderID: session.data.id,
        }),
      });

      // reload();
      e.target.reset();
      setUploading(false);
      onClose();
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
    toast.success("Send email successfully!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="ring-1 rounded py-4 px-4 shadow-lg ring-gray-200"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">
            Create Email
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="receiver"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                To
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="receiver"
                  id="receiver"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setReceiver(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="forward"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CC (Optional)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="forward"
                  id="forward"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Subject
              </label>
              <div className="mt-2">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Body
              </label>
              <div className="mt-2">
                {ReactQuill && (
                  <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    style={{ height: "200px" }}
                  />
                )}
              </div>
              <p className="mt-12 text-sm leading-6 text-gray-600">
                Write an awesome email!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => {
            updateCreateOrViewMailTab("empty");
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-[#EF3E2D] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  );
}

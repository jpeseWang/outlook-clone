"use client";
import { useContext } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { TrashIcon, FlagIcon } from "@heroicons/react/24/outline";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
import { CurrentTabContext } from "@/context/CurrentTabContext";
import { toast } from "react-hot-toast";
export default function SentMail() {
  const session = useSession();
  const { updateCreateOrViewMailTab, updateEmailId } =
    useContext(CurrentTabContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/inbox?username=${session?.data?.email}`,
    fetcher
  );
  const handlePreviewEmail = (e, postId) => {
    e.preventDefault();
    updateCreateOrViewMailTab("previewEmail");
    updateEmailId(postId);
  };
  const handleDelete = async (id, content) => {
    try {
      await fetch(`/api/inbox/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Deleted message successfully
              </p>
              <p className="mt-1 text-sm text-gray-500">
                <strong>Subject: </strong>
                {content}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };
  if (session.status === "loading") {
    return <LoadingComponent />;
  }
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <main
          role="main"
          className="w-full flex-grow pt-1 px-3 ring-1 rounded ring-gray-200 "
        >
          <div className="bg-white py-6 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl ">
                <span className="my-2 text-xl leading-8 text-gray-600 font-semibold">
                  Sent items{" "}
                  <StarIcon className="h-6 w-6 inline pb-1 text-black" />
                </span>
                <div className=" border-t border-gray-200 pt-4">
                  {data
                    ?.filter((p) => p.sender === session.data.email)
                    .slice()
                    .reverse()
                    .map((post) => (
                      <article
                        key={post.id}
                        className="flex max-w-xl flex-col items-start justify-between py-4 border-b overflow-y-auto"
                      >
                        <div className="flex items-center gap-x-4 text-xs">
                          <time
                            dateTime={post.datetime}
                            className="text-gray-500"
                          >
                            {post.date}
                          </time>
                          <a
                            href={post.category}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            From <i>{post.sender}</i>
                          </a>
                        </div>

                        <div className="relative mt-4 flex gap-x-4">
                          <div className="text-sm leading-6">
                            <span className="font-semibold text-gray-900">
                              <p className="font-semibold text-gray-900">
                                <a href={post.authorID}>
                                  <span className="absolute inset-0" />
                                  {post.authorFullname}
                                </a>
                              </p>
                              <span
                                className=" text-lg font-semibold leading-6 text-[#0F6CBD] group-hover:text-gray-600 cursor-pointer"
                                onClick={(e) => {
                                  handlePreviewEmail(e, post._id);
                                }}
                              >
                                <a href={post.href}>
                                  <span className="absolute inset-0" />
                                  {post.subject}
                                </a>
                              </span>
                              <div className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600 font-normal">
                                <span
                                  className="mt-10 max-w-2xl"
                                  dangerouslySetInnerHTML={{
                                    __html: post.content.replace(
                                      /<br\s*\/?>/gi,
                                      ""
                                    ),
                                  }}
                                />
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className=" flex ml-auto">
                          <span
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full mx-2 hover:text-red-400 hover:bg-red-100 cursor-pointer`}
                            onClick={() => handleDelete(post._id, post.subject)}
                          >
                            <div>
                              <TrashIcon className="h-5 w-5 flex-end" />
                            </div>
                          </span>
                          <span
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full  hover:text-yellow-600 hover:bg-yellow-100 cursor-pointer`}
                          >
                            <div>
                              <FlagIcon className="h-5 w-5 flex-end " />
                            </div>
                          </span>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

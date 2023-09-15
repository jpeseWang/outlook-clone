"use client";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
import { CurrentTabContext } from "@/context/CurrentTabContext";
import { toast } from "react-hot-toast";
export default function InboxMail() {
  const session = useSession();

  const { updateCreateOrViewMailTab, updateEmailId } =
    useContext(CurrentTabContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/inbox?username=${session?.data?.email}`,
    fetcher
  );

  useEffect(() => {
    console.log("START");
    const prevLength = parseInt(localStorage.getItem("inboxLength"));
    console.log("OLD", prevLength);
    console.log(
      "NEW",
      data?.filter((p) => p.receiver === session.data.email).length
    );
    if (
      data?.filter((p) => p.receiver === session.data.email).length !==
      prevLength
    ) {
      toast("You have a new message!", {
        icon: "📩",
      });
    }
    localStorage.setItem(
      "inboxLength",
      data?.filter((p) => p.receiver === session.data.email).length
    );
    console.log("END");
  }, [data]);

  const handlePreviewEmail = (e, postId) => {
    e.preventDefault();
    updateCreateOrViewMailTab("previewEmail");
    updateEmailId(postId);
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
                  Inbox <StarIcon className="h-6 w-6 inline pb-1 text-black" />
                </span>
                <div className=" border-t border-gray-200 pt-4">
                  {data
                    ?.filter((p) => p.receiver === session.data.email)
                    .slice()
                    .reverse()
                    .map((post) => (
                      <article
                        key={post.id}
                        className="flex max-w-xl flex-col items-start justify-between py-4 border-b overflow-y-auto"
                        onClick={(e) => {
                          handlePreviewEmail(e, post._id);
                        }}
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
                            className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            From <i>{post.sender}</i>
                          </a>
                        </div>

                        <div className="relative mt-4 flex  gap-x-4">
                          <div>
                            <span
                              className={`inline-flex h-10 w-10 items-center justify-center rounded-full mx-2`}
                              style={{
                                backgroundColor: `${post.senderAvatar}`,
                              }}
                            >
                              <span className="font-medium leading-none text-white">
                                {post.sender
                                  .split(" ")
                                  .map((name) => name.charAt(0))
                                  .join("")
                                  .toUpperCase()}
                              </span>
                            </span>
                          </div>

                          <div className="text-sm leading-6">
                            <span className="font-semibold text-gray-900">
                              <p className="font-semibold text-gray-900">
                                <a href={post.authorID}>
                                  <span className="absolute inset-0" />
                                  {post.authorFullname}
                                </a>
                              </p>
                              <span className=" text-lg font-semibold leading-6 text-[#EF3E2D] group-hover:text-gray-600">
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

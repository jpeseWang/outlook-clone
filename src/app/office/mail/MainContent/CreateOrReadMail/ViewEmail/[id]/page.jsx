"use client";
import useSWR from "swr";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";
import LoadingComponent from "@/app/loading";
export default function ViewEmail({ params }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/inbox/${params}`,
    fetcher
  );
  if (isLoading) {
    return <LoadingComponent />;
  }

  if (!data || !data.senderFullname) {
    return <div>Error: Email data not available.</div>;
  }
  return (
    <>
      <div className="bg-white px-6 lg:px-8 ring-1 py-2 rounded shadow-xl ring-gray-200">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <figcaption className="mt-8 flex gap-x-4">
            <div>
              {" "}
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full mx-2`}
                style={{ backgroundColor: `${data.senderAvatar}` }}
              >
                <span className="font-medium leading-none text-white">
                  {data.senderFullname
                    .split(" ")
                    .map((name) => name.charAt(0))
                    .join("")
                    .toUpperCase()}
                </span>
              </span>
            </div>
            <div className="text-sm leading-6">
              <div className="font-semibold text-gray-900">
                {data.senderFullname}{" "}
                <span className="text-gray-600 font-normal">
                  {"<"}
                  {data.sender}
                  {">"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>To: {data.receiver}</span>
                <span className="pl-6">{data.datetime}</span>
              </div>
            </div>
          </figcaption>
          <p className="text-base font-semibold leading-7 text-indigo-600 mt-2">
            Email
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.subject}
          </h1>

          <div
            className="mt-4 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        <div className="my-2 mt-6 flex gap-x-2 font-medium">
          <button className="ring-1 px-1.5 py-1 rounded ring-gray-200">
            <ArrowUturnLeftIcon className="h-6 w-6 inline pb-1 text-[#EF3E2D] mr-1" />
            Reply
          </button>
          <button className="ring-1 px-1.5 py-1 rounded ring-gray-200">
            <ArrowUturnRightIcon className="h-6 w-6 inline pb-1 text-[#EF3E2D] mr-1" />
            Forward
          </button>
        </div>
      </div>
    </>
  );
}

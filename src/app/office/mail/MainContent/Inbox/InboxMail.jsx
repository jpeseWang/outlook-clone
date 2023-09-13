import { StarIcon } from "@heroicons/react/20/solid";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
export default function InboxMail() {
  const session = useSession();

  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/inbox?username=${session?.data?.email}`,
    fetcher
  );

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
                <p className="my-2 text-xl leading-8 text-gray-600 font-semibold">
                  Inbox <StarIcon className="h-6 w-6 inline pb-1 text-black" />
                </p>
                <div className=" border-t border-gray-200 pt-4">
                  {data?.map((post) => (
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
                          Mail
                        </a>
                      </div>

                      <div className="relative mt-4 flex  gap-x-4">
                        <img
                          src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                          alt=""
                          className="h-12 w-12 rounded-full bg-gray-50"
                        />
                        {/* <div
                          className="h-12 w-12 bg-red-200 rounded-full"
                          dangerouslySetInnerHTML={{
                            __html: post.senderAvatar,
                          }}
                        /> */}
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <p className="font-semibold text-gray-900">
                              <a href={post.authorID}>
                                <span className="absolute inset-0" />
                                {post.authorFullname}
                              </a>
                            </p>
                            <h3 className=" text-lg font-semibold leading-6 text-[#EF3E2D] group-hover:text-gray-600">
                              <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.subject}
                              </a>
                            </h3>
                            <p className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600 font-normal">
                              {data && post.content.slice(0, 140)}...
                            </p>
                          </p>
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

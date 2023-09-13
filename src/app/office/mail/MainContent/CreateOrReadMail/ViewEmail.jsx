"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/app/loading";
export default function ViewEmail({ params }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/inbox/${params.id}`,
    fetcher
  );
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="bg-white px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <figcaption className="mt-8 flex gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <div className="font-semibold text-gray-900">
                  Brenna Goyette
                </div>
                <div className="text-gray-600">@brenna</div>
              </div>
            </figcaption>
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Email
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              JavaScript for Beginners
            </h1>

            <div className="mt-10 max-w-2xl">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>

              <p className="mt-10">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

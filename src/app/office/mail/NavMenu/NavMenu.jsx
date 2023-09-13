"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  LightBulbIcon,
  Cog8ToothIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { classNames } from "@/utils/classNames";
import { useRouter } from "next/navigation";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Support", href: "#" },
  { name: "Press", href: "#" },
  { name: "Blog", href: "#" },
];

export default function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const session = useSession();
  console.log(session);
  return (
    <>
      <header className="bg-[#4D5966] z-10">
        <nav
          className="mx-auto flex max-w-8xl items-center justify-between lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 inline text-white pt-1"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA4VJREFUeF7tnD+PTVEUxdcu0FCIf53SJxDRiM6odD4ACVH7IioRhcQHEI2CD6BAMo1KIgqJggSFDsWWG3fkZTJ599z31hlrz1vT3v32WWf9Zt37/uycgP+kHAgpNRYDAxH7JzAQAxFzQEyOE2IgYg6IyXFCDETMATE5ToiBiDkgJscJMRAxB8TkOCEGIuaAmBwnxEDEHBCTQ09IZp4EcBvAZQC/AHwB8CQiXqy6933oeRzA23V1rrq/xddRgWTmLQD3ARzaQ9w2gK2I+DZHeJWec/a0rJYGJDOvAng+Iex9RJxrFV+lZ+t+WuqYQH4AONaw6N2IuNdQh8ws0bNlL601FCCZeRbAx8ZFX0fExanaKj2n9jH3OgvI8BB/2Lj494g4MVWbmXcAPJiqG6//t56N+prLWEBuAnjUuOrXiDg1VZuZJXpO7WPudRaQMwA+Ny7+MiIuTdVmZomeU/uYe50CZFg0M4fPG6cbBNyIiMcNdWV6tuyltYYJ5AKAV8DSWa/tiDjfKi4zS/Rs3U9LHQ3ImJKt4dMugKN7LP4MwPWI+NkibKcmM0v0nLOnZbVUICOUIwCuAbgCYHh4vwHwNCLerSo6M3v3/A3g07o6V93f4uvoQBiiNrmHgYjRNxADEXNATI4TYiBiDojJcUIMRMwBMTlOyEEHsmsg4TCAD+sOD1TpyWBLTUiVgYQeOhkwhh40IFUGEnroZMFgAykxkNBjcEIOSJWBhB46mTBoCclMDzmQyFCeIVUGEnroJHH414YFpMRAQo/BCUkg4y+FHnIg0KEkZARSYiChx+AEgQP3lrXTrcpAQg+dLCi0hCxA6T2QIDs4wYBCB8IQtck9DESMvoEYiJgDYnKcEAMRc0BMjhNiIGIOiMlxQg46kH04dUH2dAgGW2pCegwPVOnJgEH7xXD8ttcnORCo0BLSY3igSk8CB+7X7z2GB6r0ZMKg3bI85MDDQrll9RgeqNKTh+JvJxYQDzmQyFCAjO+yPORAgMIE4iEHJSBjSkqcuuAhB+5JDpRTF3adDkHpSQgI56HOEOIexHdZNpPnAO2hzpO02Z0MRIy/gRiImANicpwQAxFzQEyOE2IgYg6IyXFCDETMATE5ToiBiDkgJscJMRAxB8TkOCEGIuaAmBwnxEDEHBCT44QYiJgDYnKcEAMRc0BMjhNiIGIOiMlxQgxEzAExOU6IGJA/LeFIg3RGC4YAAAAASUVORK5CYII="
              />
              <img
                className="inline h-12"
                src="https://res-console.cloudinary.com/dnlz6urqe/thumbnails/v1/image/upload/v1694578982/YXZlX3czeXRsZQ==/as_is"
              />
            </div>

            <span
              className="font-semibold text-lg cursor-pointer text-white pt-3 pl-6 sm:pl-9"
              onClick={() => {
                router.push("/");
              }}
            >
              Outlook
            </span>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <EllipsisHorizontalIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
              <span className="font-medium leading-none text-white">TW</span>
            </span>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-6 relative pl-2">
            <MagnifyingGlassIcon className="h-5 w-5 absolute text-gray-700 pt-1" />
            <input
              type="text"
              className="inline pl-6 rounded placeholder:font-light placeholder:text-gray-800 placeholder:text-sm px-10"
              placeholder="Search"
            />
            <VideoCameraIcon className="h-6 w-6 text-white" />
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Team call
            </a>
            <ChatBubbleLeftIcon className="h-6 w-6 text-white" />
            <WindowIcon className="h-6 w-6 text-white" />

            <BellIcon className="h-6 w-6 text-white" />
            <Cog8ToothIcon className="h-6 w-6 text-white" />
            <LightBulbIcon className="h-6 w-6 text-white" />
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {session.status === "authenticated" ? (
              <>
                {" "}
                <div
                  className="px-3 py-2 bg-red-200 rounded-full"
                  dangerouslySetInnerHTML={{ __html: session.data.avatar }}
                />{" "}
                <span
                  className="pt-2 py-2 font-semibold text-white px-2 cursor-pointer"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign out
                </span>
              </>
            ) : (
              <Link
                href="/login"
                className="text-sm font-semibold leading-6 text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  itemprop="logo"
                  class="c-image"
                  src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
                  aria-hidden="true"
                  className="overflow-x-visible h-5"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Marketplace
                  </a>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                          Company
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {company.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

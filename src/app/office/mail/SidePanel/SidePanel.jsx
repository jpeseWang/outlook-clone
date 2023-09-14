"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  Squares2X2Icon,
  PaperClipIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

import PaddleContainer from "../PaddleContainer/PaddleContainer";
import MainContent from "../MainContent/MainContent";
import { classNames } from "@/utils/classNames";

const navigation = [
  { name: "Mail", href: "#", icon: EnvelopeIcon, current: true },
  { name: "Calendar", href: "#", icon: CalendarDaysIcon, current: false },
  { name: "People", href: "#", icon: UsersIcon, current: false },
  { name: "Files", href: "#", icon: PaperClipIcon, current: false },
  { name: "More apps", href: "#", icon: Squares2X2Icon, current: false },
];
const paddlePanel = [
  { id: 1, name: "Home", href: "#", initial: "H", current: false },
  { id: 2, name: "View", href: "#", initial: "T", current: false },
  { id: 3, name: "Help", href: "#", initial: "W", current: false },
];

export default function SidePanel() {
  return (
    <>
      <div>
        {/* Static sidebar  */}
        <div className="fixed z-50 flex w-16 flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-[#F0F0F0] px-6 pb-4 h-screen">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7 mt-4">
                <li>
                  <ul role="list" className="-mx-4 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? " text-[#EF3E2D]"
                              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-[#EF3E2D]"
                                : "text-[#F242424] group-hover:text-[#EF3E2D] hover:bg-gray-50",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="pl-12 cursor-pointer">
          <div className="sticky top-0 flex h-10 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-[#FAFAFA] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            {/* Separator */}
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {paddlePanel.map((items) => (
                  <p key={items.id} className="text-gray-700">
                    {items.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="sticky top-10  flex h-14 items-center gap-x-4 border-b border-gray-200 bg-white shadow-xl sm:gap-x-6 sm:px-6 lg:px-8 w-full">
            <PaddleContainer />
          </div>

          <main className="py-6">
            <div className="px-4 sm:px-6 lg:px-8 ">
              <MainContent />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  InboxIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
export default function NavPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (title) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [title]: !prevOpen[title],
    }));
  };
  const items = [
    {
      title: "Favorites",
      children: [
        {
          title: "Inbox",
          icon: <InboxIcon className="h-6 w-6 inline mr-2" />,
        },
        {
          title: "Sent Items",
          icon: <PaperAirplaneIcon className="h-6 w-6 inline mr-2" />,
        },
        {
          title: "Drafts",
          icon: <PencilSquareIcon className="h-6 w-6 inline mr-2" />,
        },
        {
          title: "Deleted Items",
          icon: <TrashIcon className="h-6 w-6 inline mr-2" />,
        },
      ],
    },
    {
      title: "Folders",
      children: [
        {
          title: "Inbox",
          icon: <InboxIcon className="h-6 w-6 inline mr-2" />,
        },
        {
          title: "Sent Items",
          icon: <PaperAirplaneIcon className="h-6 w-6 inline mr-2" />,
        },
        {
          title: "Drafts",
          icon: <PencilSquareIcon className="h-6 w-6 inline mr-2" />,
        },
        {
          title: "Deleted Items",
          icon: <TrashIcon className="h-6 w-6 inline mr-2" />,
        },
      ],
    },
    {
      title: "Groups",
      children: [
        {
          title: "Discover groups",
        },
        {
          title: "Manage groups",
        },
      ],
    },
  ];

  const dropdownItems = items.map((item) => (
    <div key={item.title} className="py-2">
      <div
        className="btn btn-version"
        onClick={() => toggleDropdown(item.title)}
      >
        <a className="text-lg font-medium pl-9 cursor-pointer">
          {isOpen[item.title] ? (
            <ChevronDownIcon className="h-6 w-6 inline pr-2" />
          ) : (
            <ChevronRightIcon className="h-6 w-6 inline pr-2" />
          )}

          {item.title}
        </a>
      </div>
      {isOpen[item.title] && item.children && (
        <ul className="dropdown-menu pl-14 py-4 text-[#7A7A7A]">
          {item.children.map((child) => (
            <li key={child.title}>
              <div className="py-2 hover:bg-gray-200 px-2 rounded">
                {child.icon}
                {child.title}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  ));
  return (
    <>
      {" "}
      <div className="flex sm:flex-col overflow-hidden content-center justify-center">
        {dropdownItems}
      </div>
    </>
  );
}

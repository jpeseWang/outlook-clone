import { XMarkIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  TrashIcon,
  ArchiveBoxIcon,
  ShieldExclamationIcon,
  PaintBrushIcon,
  FolderIcon,
  ChevronDoubleLeftIcon,
  BoltIcon,
  EnvelopeOpenIcon,
  FlagIcon,
  ClockIcon,
  TagIcon,
  ArchiveBoxXMarkIcon,
  PrinterIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
export default function PaddleContainer() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-4 py-1 sm:px-2 sm:before:flex-1 ring-1 rounded ring-gray-200">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <span className="isolate inline-flex rounded-md shadow-sm ">
            <button
              type="button"
              className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-[#EF3E2D] px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white hover:bg-[#ef302d] focus:z-10"
            >
              <EnvelopeIcon
                className="-ml-0.5 h-5 w-5 text-white"
                aria-hidden="true"
              />
              New mail
            </button>
            <button
              type="button"
              className="cursor-pointer relative -ml-px inline-flex items-center rounded-r-md bg-[#EF3E2D] px-2 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white hover:bg-[#ef302d] "
            >
              <ChevronDownIcon className="h-4 w-4 inline" />
            </button>

            <div className="gap-x-8 flex pt-1 pl-6 ">
              <TrashIcon className="h-6 w-6 text-gray-300" />
              <ArchiveBoxIcon className="h-6 w-6 text-[#B6CD9B]" />
              <ShieldExclamationIcon className="h-6 w-6 text-[#DBA9AB]" />
              <PaintBrushIcon className="h-6 w-6 text-[#D7D7D7]" />
              <FolderIcon className="h-6 w-6 text-[#9BCAEE] " />
              <span className="border-l border-gray-200"></span>
              <ArrowUturnLeftIcon className="h-6 w-6 text-[#D0A4D7] " />
              <ChevronDoubleLeftIcon className="h-6 w-6 text-[#D0A4D7] " />
              <ArrowUturnRightIcon className="h-6 w-6 text-[#9BCAEE] " />
              <span className="border-l border-gray-200"></span>
              <div className="flex ">
                <BoltIcon className="h-6 w-6 text-[#AEA81F]" />
                <span className="text-gray-600 pl-1">Quick steps</span>
              </div>
              <div className="flex">
                <EnvelopeOpenIcon className="h-6 w-6 text-[#616161]" />
                <span className="text-gray-600 pl-1">Mark all as read</span>
              </div>
              <TagIcon className="h-6 w-6 text-[#C3C3C3] rotate-90" />
              <FlagIcon className="h-6 w-6 text-[#DBA8Ab] " />

              <ClockIcon className="h-6 w-6 text-[#C0C0C0] " />
              <ArchiveBoxXMarkIcon className="h-6 w-6 text-[#9BCAEE] " />
              <PrinterIcon className="h-6 w-6 text-[#C7C7C7] " />
              <EllipsisHorizontalIcon className="h-6 w-6 text-[#616161] " />
            </div>
          </span>
        </p>
      </div>
    </div>
  );
}

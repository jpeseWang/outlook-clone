import { XMarkIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
export default function Banner() {
  return (
    <div className="flex items-center gap-x-6 bg-[#0078D4] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="#">
          Introducing Microsoft 365 Copilot—your copilot for work.&nbsp;
        </a>
        <strong className="font-semibold">Learn More</strong>{" "}
        <ChevronRightIcon className="h-5 w-5 text-white inline" />
      </p>

      <div className="flex flex-1 justify-end"></div>
    </div>
  );
}

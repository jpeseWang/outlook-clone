import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
export default function HeroSection() {
  return (
    <>
    <main className="lg:relative bg-[#F2F2F2]">
      <div className="mx-auto w-full max-w-7xl pt-16 text-center lg:pt-38 lg:text-left ">
        <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span className="block text-[#0078D3] ">Microsoft Outlook</span>
          </h1>
          <p className="mx-auto mt-1 max-w-md text-lg text-8ray-500 sm:text-xl md:mt-3 md:max-w-2xl font-semibold">
            Connect, organize, and get things done with free personal email and
            calendar.
          </p>
          <div className="mt-4 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/login"
                className="flex w-full items-center justify-center  border border-transparent bg-[#0078D3] px-8 py-3 text-base font-medium text-white hover:bg-[#29296e] md:px-10 md:py-1 md:text-lg"
              >
                Sign in
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
              <Link
                href="/signup"
                className="flex w-full items-center justify-center  border border-transparent bg-white px-8 py-3 text-base font-medium text-[#0078D3] hover:bg-gray-50 md:px-10 md:py-1 md:text-lg ring-2 ring-[#0078D3]"
              >
                Create free account
              </Link>
            </div>
          </div>
          <div className="py-4 text-[#0078D3] font-medium hover:underline hover:mx-2 cursor-pointer">
            Try premium <ChevronRightIcon className="h-5 w-5 inline  "/>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-contain"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/hero_image@2x_RE4rxpr?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=960&qlt=90&fmt=png-alpha&fit=constrain"
          alt=""
        />
      </div>
</main>
      {/* Banner 2 */}
      <div className="flex items-center gap-x-6 bg-[#0078D4] px-6 py-6 sm:px-3.5 sm:before:flex-1">
      <p className="text-lg font-medium leading-6 text-white">
        <a href="#">
        Everything you need to be your most productive and connected self–at home, on the go, and everywhere in between
        </a>
       
      </p>

      <div className="flex flex-1 justify-end"></div>
    </div>

{/* HeroSec2 */}
<div className="">
<main className="lg:relative "><div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-contain"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/outlook_blade2_RE4s5QT?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=85&fit=constrain"
          alt=""
        />
      </div>
      <div className="mx-auto w-full max-w-7xl pt-6 text-center lg:pt-38 lg:text-left border border-gray-300 px-4 shadow-lg">
        <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-xl font-medium tracking-tight sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span className="block text-gray-800 ">Email and calendar, together in one place</span>
          </h1>
          <p className="mx-auto mt-1 max-w-md text-sm text-8ray-500 sm:text-base md:my-3 md:max-w-2xl  text-gray-800">
          Send, receive, and manage your email. Use Outlook’s built-in calendar to keep track of appointments and events.
          </p>
          
         
        </div>
      </div>
      
</main>

</div>
 
    </>
  );
}

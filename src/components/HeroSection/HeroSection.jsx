import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center lg:py-48 lg:text-left">
        <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span className="block text-[#0078D3] ">Microsoft Outlook</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-xl text-8ray-500 sm:text-2xl md:mt-5 md:max-w-3xl font-semibold">
            Connect, organize, and get things done with free personal email and
            calendar.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/login"
                className="flex w-full items-center justify-center rounded border border-transparent bg-[#0078D3] px-8 py-3 text-base font-medium text-white hover:bg-[#003fd3] md:px-10 md:py-4 md:text-lg"
              >
                Sign in
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
              <Link
                href="/signup"
                className="flex w-full items-center justify-center rounded border border-transparent bg-white px-8 py-3 text-base font-medium text-[#0078D3] hover:bg-gray-50 md:px-10 md:py-4 md:text-lg ring-2 ring-[#0078D3]"
              >
                Create free account
              </Link>
            </div>
          </div>
          <div className="py-4 text-[#0078D3] font-medium">
            Try premium {`>`}
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
  );
}

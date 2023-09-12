import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      {/* <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link> */}
      <div className="grid min-h-full  bg-white">
        <header className="mx-auto w-full  px-6 pt-6 sm:pt-10   lg:px-8">
          <a href="#">
            <span className="sr-only">Your Company</span>
          </a>
        </header>
        <main className="mx-auto w-full  px-6 py-24 sm:py-32   lg:px-8">
          <div className="max-w-lg">
            <p className="text-base font-semibold leading-8 text-[#0067b8]">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              This site is temporarily unavailable
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              This site is temporarily unavailable due to maintenance. Please
              try again later.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

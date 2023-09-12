export default function Signup() {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-green-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-5xl font-extra font-medium leading-9 tracking-tight text-gray-900">
            Outlook
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow-xl sm:px-12">
            <img
              class="logo"
              role="img"
              pngsrc="https://logincdn.msftauth.net/shared/1.0/content/images/microsoft_logo_ea19b2112f4dfd8e90b4505ef7dcb4f9.png"
              svgsrc="https://logincdn.msftauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg"
              data-bind="imgSrc, attr: { alt: str['MOBILE_STR_Footer_Microsoft'] }"
              src="https://logincdn.msftauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg"
              alt="Microsoft"
            />
            <div className="mt-4 text-2xl font-bold">Create account</div>
            <div className="text-base mt-2">
              Connect, organize, and get things done with email and calendar
              from Outlook.com.
            </div>
            <form className="space-y-6 mt-4" action="#" method="POST">
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md py-1.5 px-1.5 text-gray-900  placeholder:text-gray-500  sm:text-sm sm:leading-6 border-b-2 shadow-none"
                    placeholder="someone@example.com"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md py-1.5 px-1.5 text-gray-900  placeholder:text-gray-500  sm:text-sm sm:leading-6 border-b-2 shadow-none"
                    placeholder="Create Password"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md py-1.5 px-1.5 text-gray-900  placeholder:text-gray-500  sm:text-sm sm:leading-6 border-b-2 shadow-none"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm leading-6 text-gray-900"
                  >
                    Show password
                  </label>
                </div>
              </div>
              <div>
                <p className="cursor-pointer block text-sm  text-[#0067b8] hover:underline decoration-black">
                  Get a new email address
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex justify-center w-1/3  bg-[#0067b8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0044b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

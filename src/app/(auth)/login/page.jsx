"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import LoadingComponent from "@/app/loading";
export default function Login() {
  const [loadingSpin, setLoadingSpin] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();
  const params = useSearchParams();

  useEffect(() => {
    setError(params.get("error"));
  }, [params]);

  if (session.status === "loading") {
    return <LoadingComponent />;
  }

  if (session.status === "authenticated") {
    router?.push("/office/mail");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSpin(true);
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signIn("credentials", {
        email,
        password,
      });
      setTimeout(() => {
        toast.success("Welcome back!");
      }, 1000);
      setLoadingSpin(false);
    } catch (error) {
      console.error("Sign-in error:", error);
      setLoadingSpin(false);
    }
  };
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
            <div className="mt-4 text-2xl font-bold">Sign in</div>
            <div className="text-sm">to continue to Outlook</div>
            <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md py-1.5 px-1.5 text-gray-900  placeholder:text-gray-500  sm:text-sm sm:leading-6 border-b-2 shadow-none"
                    placeholder="Email, phone, or Skype"
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
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <p className=" block text-sm leading-6 text-gray-900 my-2">
                  No account?
                  <span
                    className="text-[#0067b8] cursor-pointer hover:underline decoration-black"
                    onClick={() => {
                      router.push("/signup");
                    }}
                  >
                    {" "}
                    Create one!
                  </span>
                </p>
                <p className="cursor-pointer block text-sm  text-[#0067b8] hover:underline decoration-black">
                  Sign in with Windows Hello or a security key
                </p>
                <p className="my-2 text-red-500 font-medium">
                  {" "}
                  {error && error}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex justify-center w-1/3  bg-[#0067b8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0044b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {" "}
                  {loadingSpin ? (
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      spin
                      className="text-white h-5 w-5 mr-2"
                    />
                  ) : (
                    <></>
                  )}
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

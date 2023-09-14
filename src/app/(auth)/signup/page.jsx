"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { randomColor } from "@/utils/randomColor";
export default function Signup() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [samePass, setSamePass] = useState(false);
  const router = useRouter();
  const randomBgColor = randomColor();

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const fullname = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const avatar = randomBgColor;
      if (password === e.target[3].value) {
        try {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
              avatar,
              fullname,
              email,
              password,
            }),
          });
          toast.success("Create account successfully");
          res.status === 201 &&
            router.push("/login?success=Account has been created");
        } catch (err) {
          setError(err);
          console.log(err);
        }
      } else setSamePass(true);
    } catch (err) {
      console.log(err);
      setUploading(false);
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
            <div className="mt-4 text-2xl font-bold">Create account</div>
            <div className="text-base mt-2">
              Connect, organize, and get things done with email and calendar
              from Outlook.com.
            </div>
            <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
              <div>
                <div className="mt-2">
                  <input
                    id="fullname"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md py-1.5 px-1.5 text-gray-900  placeholder:text-gray-500  sm:text-sm sm:leading-6 border-b-2 shadow-none"
                    placeholder="Full Name"
                  />
                </div>
              </div>
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
                    type={isShowPassword ? "text" : "password"}
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
                    type={isShowPassword ? "text" : "password"}
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
                    onChange={() => {
                      handleShowPassword();
                    }}
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
                <p className=" block text-sm leading-6 text-gray-900 my-2">
                  Already have account?
                  <span
                    className="text-[#0067b8] cursor-pointer hover:underline decoration-black"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    {" "}
                    Get access!
                  </span>
                </p>
              </div>
              {samePass && (
                <p className="text-red-500 font-medium text-sm py-1">
                  Password is not matched!
                </p>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex justify-center w-1/3  bg-[#0067b8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0044b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {uploading ? (
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      spin
                      className="text-white h-5 w-5 mr-2"
                    />
                  ) : (
                    <></>
                  )}
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

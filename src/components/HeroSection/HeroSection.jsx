import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
const features = [
  {
    name: "Unlimited Inboxes",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: InboxIcon,
  },
  {
    name: "Manage Team Members",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: UsersIcon,
  },
  {
    name: "Spam Report",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: TrashIcon,
  },
  {
    name: "Compose in Markdown",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: PencilSquareIcon,
  },
  {
    name: "Team Reporting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Saved Replies",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ArrowUturnLeftIcon,
  },
  {
    name: "Email Commenting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Connect with Customers",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HeartIcon,
  },
];
const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];
export default function HeroSection() {
  return (
    <>
      {/* hèodaf */}
      <div className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6  pt-10 lg:flex lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="block text-[#0078D3] ">Microsoft Outlook</span>
            </div>
            <p className="mx-auto mt-1 max-w-md text-lg text-8ray-500 sm:text-xl md:mt-3 md:max-w-2xl font-semibold">
              Connect, organize, and get things done with free personal email
              and calendar.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
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
            </div>
            <div className="py-4 text-[#0078D3] font-medium hover:underline hover:mx-2 cursor-pointer">
              Try premium <ChevronRightIcon className="h-5 w-5 inline  " />
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl  p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/hero_image@2x_RE4rxpr?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=960&qlt=90&fmt=png-alpha&fit=constrain"
                  width={2432}
                  height={1042}
                  className="w-[56rem] rounded-md "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner 2 */}
      <div className="flex items-center gap-x-6 bg-[#0078D4] px-6 py-6 sm:px-3.5 sm:before:flex-1">
        <p className="text-lg font-medium leading-6 text-white">
          <a href="#">
            Everything you need to be your most productive and connected self–at
            home, on the go, and everywhere in between
          </a>
        </p>

        <div className="flex flex-1 justify-end"></div>
      </div>

      {/* HeroSec2 */}
      <main>
        {/* Hero section */}
        <div className="relative mt-10">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/outlook_blade2_RE4s5QT?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=85&fit=constrain"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-600 mix-blend-multiply" />
              </div>
              <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Take control of your</span>
                  <span className="block text-indigo-200">
                    customer support
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Send, receive, and manage your email. Use Outlook’s built-in
                  calendar to keep track of appointments and events.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-center text-base font-semibold text-gray-500">
              Free access to Office apps
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-10">
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg.png?20220402045433"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Logo.png"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://1000logos.net/wp-content/uploads/2020/08/Microsoft-Excel-Logo.png"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png?20210821050414"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1  lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Microsoft_Office_OneNote_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_OneNote_%282019%E2%80%93present%29.svg.png"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1  lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://www.usi.edu/media/dpln4za5/microsoft_office_teams_-2018-present-svg.webp?rmode=max&width=500"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1  lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/1920px-Microsoft_Office_Access_%282019-present%29.svg.png"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-1  lg:col-span-1">
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Microsoft_Office_Yammer_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Yammer_%282018%E2%80%93present%29.svg.png"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative overflow-hidden pb-32 pt-16">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                      <InboxIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Stay on top of your day
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                        sed diam. Sit orci risus aenean curabitur donec aliquet.
                        Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Marcia Hill, Digital Marketing Manager
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Endless-Carousel01x2_RE4s8qt?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1844&qlt=100&fit=constrain"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Stay organized and connected
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Endless-Carousel02x2_RE4slnR?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1844&qlt=100&fit=constrain"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-[#0078D4] to-indigo-700">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:pb-24 sm:pt-20 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Inbox support built for efficiency
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis
              in.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="relative bg-gray-800">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Immersive-Module-image04--x2_RE4slnH?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3840&qlt=85&fit=constrain"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pb-64 pt-12 sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24">
              <h2 className="text-base font-semibold">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Valuable Metrics
                </span>
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                Get actionable data that will help grow your business
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Rhoncus sagittis risus arcu erat lectus bibendum. Ut in
                adipiscing quis in viverra tristique sem. Ornare feugiat viverra
                eleifend fusce orci in quis amet. Sit in et vitae tortor, massa.
                Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam
                sit tellus quis at.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
                Get in touch or create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-x-5 sm:space-y-0">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

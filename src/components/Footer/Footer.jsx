const navigation = {
  solutions: [
    { name: "Surface Book 3", href: "#" },
    { name: "Microsoft 365", href: "#" },
    { name: "Surface Pro", href: "#" },
    { name: "Windows 11 apps", href: "#" },
  ],
  support: [
    { name: "Microsoft in education", href: "#" },
    { name: "Devices for education", href: "#" },
    { name: "Microsoft Teams for Education", href: "#" },
    { name: "Microsoft 365 Education", href: "#" },
    { name: "Office Education", href: "#" },
    
  ],
  company: [
    { name: "Developer Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Microsoft Learn", href: "#" },
    { name: "Azure Marketplace", href: "#" },
  ],
  
 
 
  
  legal: [
    { name: "Careers", href: "#" },
    { name: "About Microsoft", href: "#" },
    { name: "Company news", href: "#" },
  ],
  e: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  for: [
    { name: "Careers", href: "#" },
    { name: "About Microsoft", href: "#" },
    { name: "Company news", href: "#" },
  ],

};

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-6 sm:pt-14 lg:px-8 lg:pt-22">
        <div className="mt-16 grid grid-cols-3 gap-8 md:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-base font-semibold leading-6 text-[#616161]">
              What&apos;s new
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-[#181818] hover:underline decoration-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
            <h3 className="text-base font-semibold leading-6 text-[#616161]">
              Microsoft Store
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-[#181818] hover:underline decoration-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
            <h3 className="text-base font-semibold leading-6 text-[#616161]">
              Education
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-[#181818] hover:underline decoration-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
            <h3 className="text-base font-semibold leading-6 text-[#616161]">
              Business
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-[#181818] hover:underline decoration-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
            <h3 className="text-base font-semibold leading-6 text-[#616161]">
              Developer & IT
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-[#181818] hover:underline decoration-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
            <h3 className="text-base font-semibold leading-6 text-[#616161]">
              Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-[#181818] hover:underline decoration-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2023 Microsoft, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

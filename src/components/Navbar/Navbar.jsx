import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import PhoneIcon from "../../assets/phone-icon1.svg";
import EmailIcon from "../../assets/email-icon.svg";
import WhatsappIcon from "../../assets/whatsapp.svg";
import MdvLogo from "../../assets/mdv_logo.jpeg"
import { useNavigate } from "react-router-dom";
import { menuItems } from "./menuItem";
import MenuItems from "./MenuItems";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About us", href: "#", current: false },
  { name: "Tax", href: "#", current: false, service: true },
  { name: "Accounting", href: "#", current: false, service: true },
  { name: "Audit", href: "#", current: false, service: true },
  { name: "Compliance", href: "#", current: false, service: true },
  { name: "Bussiness Startup", href: "#", current: false, service: true },
  { name: "Software Solutions", href: "#", current: false, service: true },
  { name: "Insights", href: "#", current: false },
  { name: "Contact us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="px-2 sm:px-6 lg:px-8 container mx-auto">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={MdvLogo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-12 w-auto lg:block rounded-full"
                      src={MdvLogo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <nav className="">
                        <ul className="menus">
                          {menuItems.map((menu, index) => {
                            const depthLevel = 0;
                            return (
                              <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                              />
                            );
                          })}
                        </ul>
                      </nav>
                      {/* {navigation.map((item) => (
                        <div
                          key={item.name}
                          onClick={() => navigate("/")}
                          className={classNames(
                            item.current
                              ? "bg-primary text-white inline-flex"
                              : "text-primary hover:bg-secondary hover:text-white inline-flex",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                          {item.service && (<svg
                      className="ml-2 mt-1 -mr-0.5 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14l5-5-5-5-1.41 1.41L11.17 9H4v2h7.17l-2.58 2.58L10 14z"
                        clipRule="evenodd"
                      />
                    </svg>)}
                        </div>
                      ))} */}
                    </div>
                  </div>
                </div>
                {/* <div className="hidden md:block">
                  <div className="flex">
                  <div className="flex text-primary">
                    <img
                      src={PhoneIcon}
                      alt=""
                      className="h-8 w-8 rounded-full p-1"
                    />
                    <span className="text pt-1 mx-4">+91 7306600306</span>
                  </div>
                  <div className="flex text-primary">
                    <img
                      src={EmailIcon}
                      alt=""
                      className="h-8 w-8 p-1"
                    />
                    <span className="text pt-1 mx-4">
                      rasheedvaniyannurrashi175@gmail.com
                    </span>
                  </div>
                  <div className="flex text-primary">
                    <img
                      src={WhatsappIcon}
                      alt=""
                      className="h-8 w-8 bg-white rounded-full p-1"
                    />
                    <span className="text pt-1 mx-4">+91 7306600306</span>
                  </div>
                  </div>
                </div> */}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
            <div className="flex space-x-4">
                      <nav className="">
                        <ul className="menus">
                          {menuItems.map((menu, index) => {
                            const depthLevel = 0;
                            return (
                              <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                              />
                            );
                          })}
                        </ul>
                      </nav>
                      {/* {navigation.map((item) => (
                        <div
                          key={item.name}
                          onClick={() => navigate("/")}
                          className={classNames(
                            item.current
                              ? "bg-primary text-white inline-flex"
                              : "text-primary hover:bg-secondary hover:text-white inline-flex",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                          {item.service && (<svg
                      className="ml-2 mt-1 -mr-0.5 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14l5-5-5-5-1.41 1.41L11.17 9H4v2h7.17l-2.58 2.58L10 14z"
                        clipRule="evenodd"
                      />
                    </svg>)}
                        </div>
                      ))} */}
                    </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

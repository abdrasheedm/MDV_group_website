import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onService, setService] = useState("");

  const toggleDropdown = (service) => {
    setIsOpen(!isOpen);
    setService(service);
  };

  const services = [
    {
      name: "Tax",
      categories: [
        {
          name: "VAT Tax",
          subcategories: [
            {
              name: "VAT Registration",
              link: "service/vat-registration-service/",
            },
          ],
        },
      ],
      link: "/services/service-1",
    },
    {
      name: "Accounting",
      categories: [
        {
          name: "Accounting",
          link: "service/vat-registration-service/",
        },
      ],
    },
    {
      name: "Audit",
      categories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
      link: "/services/service-3",
    },
    {
      name: "Compliance",
      categories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
      link: "/services/service-3",
    },
    {
      name: "Bussiness Startup",
      categories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
      link: "/services/service-3",
    },
    {
      name: "Software Solutions",
      categories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
      link: "/services/service-3",
    },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {services.map((service, index) => (
                <div key={index} className="relative">
                  <button
                    onPointerOver={() => toggleDropdown(service.name)}
                    type="button"
                    className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-expanded="false"
                  >
                    {service.name}
                    <svg
                      className="ml-2 -mr-0.5 h-4 w-4"
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
                    </svg>
                  </button>

                  {isOpen && onService === service.name && (
                    <div className="absolute z-10 mt-3 px-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {service.categories.map((category) => (
                          <Link
                            key={category}
                            // to={category.link + "/" + subcategory}
                            className="inline-flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {category.name}
                            <svg
                              className="ml-2 -mr-0.5 h-4 w-4"
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
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

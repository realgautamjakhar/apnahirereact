import React, { useState } from "react";
import { BagIcon, CreditCardIcon, ReportIcon } from "./Icons";
import { NavLink, useLocation } from "react-router-dom";
const links = [
  {
    href: "/jobs",
    label: "Jobs",
    icon: <BagIcon />,
  },
  {
    href: "/reports",
    label: "Reports",
    icon: <ReportIcon />,
  },
  {
    href: "/manage-coins",
    label: "Manage coin",
    icon: <CreditCardIcon />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" fixed top-4 right-4 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          className="bi bi-list bg-text-gray-800"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div
        className={`bg-white md:relative pt-6 md:pt-0 absolute h-full md:h-auto top-0  z-[100] md:z-0 ${
          isOpen ? " w-0 opacity-0" : " w-60 md:w-80"
        } duration-300 ease-linear`}
      >
        <NavLink to={"/"} className=" md:hidden p-4 text-gray-900 text-xl">
          Brand Logo
        </NavLink>
        <ul className=" grid gap-4 w-full pt-6">
          {links.map((link, index) => {
            return (
              <li key={index} className=" grid w-full ">
                <NavLink
                  to={link.href}
                  end
                  className={`${
                    location.pathname === link.href
                      ? "border-l-8 bg-blue-100  border-blue-400 "
                      : ""
                  } w-full inline-flex px-4 py-2 gap-4`}
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

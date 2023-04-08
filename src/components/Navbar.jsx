import React, { useState } from "react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span  className="text-white text-xl font-serif font-bold">ADJ LTD</span>
          </div>
          <div className="hidden md:block">
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400"
            >
              Sign Up
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>


              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"
          } md:hidden bg-gray-700`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          <a
            href="/"
            className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-500 hover:bg-indigo-400"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

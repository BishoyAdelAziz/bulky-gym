// Root Layout Navbar.jsx
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const Routes = [
    { name: "Profile", path: "/profile" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <header className="bg-lime-500 text-black flex justify-between px-3 py-5 mx-auto rounded-3xl sticky top-0 z-30">
      <Link className="font-extrabold uppercase text-xl lg:text-3xl" to="/">
        <h1>Bulky Gym</h1>
      </Link>
      <aside>
        <div
          className={`mt-2 rounded-es-3xl fixed lg:hidden z-50 top-0 right-0 rounded-tl-2xl bg-lime-500 transition ease-out duration-500 transform ${
            showNav ? "translate-x-0" : "translate-x-full"
          } h-full sm:max-md:w-[50%] md:w-[30%]`}
        >
          <FaChevronRight
            className="text-3xl mt-3 text-center block w-full"
            onClick={() => setShowNav(false)}
          />
          <ul className="w-full text-center font-bold">
            {Routes.map((item) => (
              <li className="my-6" key={item.name}>
                <Link
                  onClick={() => setShowNav(false)}
                  className=""
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <BsLayoutSidebarInsetReverse
          className="text-3xl lg:hidden"
          onClick={() => setShowNav(true)}
        />
        <div>
          <ul className="hidden lg:flex gap-4 xl:gap-6 text-center text-2xl font-medium uppercase">
            {Routes.map((item) => (
              <li className="mx-4" key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  console.log(window.innerWidth);
  const [showNav, setShowNav] = useState(false);
  const Routes = [
    { name: "Profile", path: "/profile" },
    { name: "Shop", path: "/shop" },
  ];
  return (
    <header className="bg-lime-500 text-black flex justify-between px-3 py-5 mx-auto rounded-3xl">
      <Link className="font-extrabold uppercase text-xl lg:text-3xl" to={"/"}>
        <h1 className="text-nowrap">Bulky Gym</h1>
      </Link>
      <aside>
        <div
          className={`mt-2 rounded-es-lg absolute lg:hidden z-10 top-0 right-0 rounded-tl-2xl bg-lime-500 transition ease-out delay-150 duration-300 transform  ${showNav ? "translate-0" : "translate-x-full"} h-screen  w-2xs`}
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
                  to={`${item.path}`}
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
          <ul className="flex lg:gap-4 xl:gap-6 text-center text-2xl font-medium uppercase sm:max-lg:hidden">
            {Routes.map((item) => (
              <li className="mx-4" key={item.name}>
                <Link to={`${item.path}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  );
}

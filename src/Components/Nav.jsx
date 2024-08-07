import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../../public/logo.png";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full z-50 fixed flex items-center justify-between lg:px-16 px-8 lg:py-8 py-4 h-24 text-black nav-transition ${
        isScrolled ? "bg-zinc-800 text-white transition-all ease-in-out" : ""
      }`}
    >
      <div className="flex items-center gap-16">
        <NavLink to="/">
          <div className="px-4 py-2 rounded-2xl">
            <img src={logo} alt="Logo" className="w-[7vw] navimg" />
          </div>
        </NavLink>
        <div className="flex items-center gap-[4vw] uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/media"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
           Media
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <FiSearch className="text-xl font-bold" />
        <LuShoppingCart className="text-xl" />
        <GrFavorite className="text-xl" />
        <div className="bg-zinc-800 p-2 text-white rounded-full">
          <FaRegUser className="text-base" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

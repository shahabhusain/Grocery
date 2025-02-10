import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Header = () => {
  const [open, setOpen] = useState(1);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="py-3 bg-white sticky top-0 z-[1000] shadow-md">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        {/* Logo */}
        <img className="cursor-pointer w-[100px]" src={logo} alt="Logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Join Us", path: "/join" },
              { name: "Community Partners", path: "/community" },
              { name: "Members", path: "/member" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(index + 1)}
                className={`text-[20px] font-[500] cursor-pointer ${
                  open === index + 1 ? "text-[#008B47]" : "text-[#000]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <button className="py-2 px-6 rounded-md bg-[#008B47] text-white text-[20px] cursor-pointer">
            Account
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {mobileOpen ? (
            <FaTimes
              className="text-3xl text-[#008B47] cursor-pointer"
              onClick={() => setMobileOpen(false)}
            />
          ) : (
            <FaBars
              className="text-3xl text-[#008B47] cursor-pointer"
              onClick={() => setMobileOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-lg">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Join Us", path: "/join" },
            { name: "Community Partners", path: "/community" },
            { name: "Members", path: "/member" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => {
                setOpen(index + 1);
                setMobileOpen(false);
              }}
              className={`text-[20px] font-[500] cursor-pointer ${
                open === index + 1 ? "text-[#008B47]" : "text-[#000]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="py-2 px-6 rounded-md bg-[#008B47] text-white text-[20px] cursor-pointer">
            Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

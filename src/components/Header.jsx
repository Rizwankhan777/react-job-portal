import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
       
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Company Logo"
              className="w-9 h-9 object-contain"
            />
            <h1 className="text-base md:text-lg font-bold text-[#0154AA]">
              Find Jobs
            </h1>
          </div>
          <nav className="hidden lg:flex gap-6 text-sm text-gray-600">
            <a href="#">Top Companies</a>
            <a href="#">Job Tracker</a>
            <a href="#">My Calendar</a>
            <a href="#">Documents</a>
            <a href="#">Messages</a>
          </nav>
        </div>

        
        <div className="flex items-center gap-3 relative">
          {/* Search Input (Desktop only) */}
          <div className="hidden md:block relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F6F9FF] pl-10 pr-3 rounded-[8px] py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0154AA]"
            />
          </div>
        <button className="hidden lg:block bg-[#0154AA] text-white px-5 py-2 rounded-[8px] text-sm hover:bg-[#014a96] transition">
          Resume Builder
        </button>

          {/* User Image */}
          <img
            src={user}
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t text-gray-700 px-6 py-4 flex flex-col gap-3 animate-slide-down">
          <a href="#">Top Companies</a>
          <a href="#">Job Tracker</a>
          <a href="#">My Calendar</a>
          <a href="#">Documents</a>
          <a href="#">Messages</a>

       
          <div className="relative mt-2">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#F6F9FF] pl-10 pr-3 rounded-[8px] py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0154AA]"
            />
          </div>

         
          <button className="mt-3 bg-[#0154AA] text-white px-5 py-2 rounded-[8px] text-sm hover:bg-[#014a96] transition">
            Resume Builder
          </button>
        </div>
      )}
    </header>
  );
}

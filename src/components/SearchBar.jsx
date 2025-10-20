import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { jobs } from "../data/jobs"; // 
export default function SearchBar({ 
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  jobType,
  setJobType,
  onSearch }) 
  {

   // Extract unique locations dynamically
  const locations = [...new Set(jobs.map((job) => job.location))];

  //  Extract unique job titles (for job types)
  const jobTypes = [...new Set(jobs.map((job) => job.title))];

  const handleSearchClick = () => {
    onSearch({ searchTerm, location, jobType });
  };


  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold">
        Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
      </h1>
      <p className="mt-1 text-[#585D6E]">
        Explore the latest job openings and apply for the best opportunities available today!
      </p>

      <div className="bg-white rounded-lg shadow-sm p-3 mt-4 grid grid-cols-1 md:grid-cols-7 gap-3">
        <input
          className="md:col-span-3 placeholder-[#585D6E] px-3 py-2 w-full"
          placeholder="Job Title, Company, or Keywords"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

          {/* ✅ Dynamic Location Dropdown */}
        <select
          className="border-l border-[#F4F4F4] text-[#585D6E] md:col-span-2 px-3 py-2 w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* ✅ Dynamic Job Type Dropdown */}
        <select
          className="border-l md:col-span-1 text-[#585D6E] border-[#F4F4F4] px-3 py-2 w-full"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Job Type</option>
          {jobTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearchClick}
          className="bg-[#0154AA] text-white rounded-[8px] md:col-span-1 px-4 py-1 w-full flex items-center justify-center gap-2 hover:bg-blue-700 transition"
        >
          <FiSearch className="text-white text-lg" />
          Search
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <p className="text-[#737A91]">Similar:</p>
        {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setSearchTerm(tag);
              onSearch({ searchTerm: tag, location, jobType });
            }}
            className="py-1 px-3 border border-[#737A91] rounded-[5px] text-sm text-[#737A91]"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

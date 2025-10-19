
import React from 'react';
import { FiSearch } from "react-icons/fi";
export default function SearchBar() {
  return (
    <div className=" py-4 ">
      <h1 className="text-2xl font-bold">Find your Dream Job, <span className="text-[#0154AA]">Albert!</span></h1>
      <p className=" mt-1 text-[#585D6E]">Explore the latest job openings and apply for the best opportunities available today!</p>

<div className="bg-white rounded-lg shadow-sm p-3 mt-4 grid grid-cols-1 md:grid-cols-7 gap-3">
  <input
    className="md:col-span-3 placeholder-[#585D6E] rounded px-3 py-2 w-full"
    placeholder="Job Title, Company, or Keywords"
  />

  <select className="border-l border-[#F4F4F4] text-[#585D6E] md:col-span-2 px-3 py-2 w-full">
    <option>Select Location</option>
    <option>Uk</option>
      <option>USA</option>
     
  </select>

  <select className="border-l md:col-span-1 text-[#585D6E] border-[#F4F4F4] px-3 py-2 w-full">
    <option>Job Type</option>
  </select>

 <button className="bg-[#0154AA] text-white rounded-[8px] md:col-span-1 px-4 py-1 w-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
  <FiSearch className="text-white text-lg" />
  Search
</button>
</div>



      <div className="mt-3 flex items-center gap-2">
        
        <div className="flex gap-2">
            <p className='text-[#737A91]'>Similar:</p>
          <button className="py-1 px-3 border border-[#737A91] rounded-[5px] text-sm text-[#737A91]">Frontend</button>
          <button className="py-1 px-3 border border-[#737A91] rounded-[5px] text-sm text-[#737A91]">Backend</button>
          <button className="py-1 px-3 border border-[#737A91] rounded-[5px] text-sm text-[#737A91]">Graphic Designer</button>
        </div>
      </div>
    </div>
  );
}
